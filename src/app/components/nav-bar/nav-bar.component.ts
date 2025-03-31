import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: false,
})
export class NavBarComponent implements OnChanges {
  @Input() navBarOpened = true;
  @Input() isLeftSidebar: boolean = true;
  @Input() fullScreen: boolean = false;

  @Output() sidebarWidth = new EventEmitter<{
    width: number;
    isLeft: boolean;
  }>();

  isResizing = false;
  screenWidth: number = window.innerWidth;

  sidebarStyle = {
    width: 250,
    zIndex: 101,
    border: 'none',
  };

  sidebarResizeStyle = {
    width: 250,
    zIndex: 101,
    border: 'none',
  };

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.onResizes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['navBarOpened'] && changes['navBarOpened'].currentValue) {
      if (this.navBarOpened) {
        this.ngZone.run(() => {
          this.sidebarWidth.emit({
            width: this.sidebarResizeStyle.width,
            isLeft: this.isLeftSidebar,
          });
        });
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResizes(): void {
    this.screenWidth = window.innerWidth;
  }

  onResizeStart(): void {
    document.body.style.userSelect = 'none';
    this.isResizing = true;
    console.log('Start');
  }

  onResize(event: MouseEvent): void {
    if (this.isResizing) {
      window.requestAnimationFrame(() => {
        this.sidebarResizeStyle = {
          ...this.sidebarResizeStyle,
          width: this.isLeftSidebar
            ? event.clientX
            : this.screenWidth - event.clientX,
          zIndex: 102,
          border: this.isLeftSidebar ? '1px #ccc solid' : '1px #ccc solid',
        };
      });
    }
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:mouseleave', ['$event'])
  onResizeEnd(event: MouseEvent): void {
    document.body.style.userSelect = '';
    if (this.isResizing) {
      this.isResizing = false;
      console.log('Resize End');
      this.updateSidebarStyles(event.clientX);
    }
  }

  private updateSidebarStyles(clientX: number): void {
    const minWidth = 200;
    const maxWidth = this.screenWidth * 0.4 - 10;
    const newWidth = Math.max(
      minWidth,
      Math.min(
        this.isLeftSidebar ? clientX : this.screenWidth - clientX,
        maxWidth
      )
    );

    this.sidebarStyle = { ...this.sidebarStyle, width: newWidth };

    this.sidebarResizeStyle = {
      ...this.sidebarResizeStyle,
      width: newWidth === maxWidth ? maxWidth + 10 : newWidth,
      zIndex: 101,
      border: 'none',
    };

    this.sidebarWidth.emit({ width: newWidth, isLeft: this.isLeftSidebar });
  }

  blocKonResize(event: Event): void {
    event.stopPropagation();
  }
}

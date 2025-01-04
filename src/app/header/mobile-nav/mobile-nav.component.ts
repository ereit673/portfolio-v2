import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-nav',
  imports: [TranslateModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  constructor(private translate: TranslateService) {}

  @Input({ required: true }) isMobileNavOpened: boolean = false;
  @Output() isMobileNavOpenedChange = new EventEmitter<boolean>();
  @Output() changeTheme = new EventEmitter<void>(); 

  onToggleMobileNav() {
    this.isMobileNavOpened = !this.isMobileNavOpened;

    this.isMobileNavOpenedChange.emit(this.isMobileNavOpened);
  }

  onToggleTheme() {
    this.changeTheme.emit();
  }
}

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

  @Input({ required: true }) language!: string;
  @Input({ required: true }) isMobileNavOpened: boolean = false;
  @Output() isMobileNavOpenedChange = new EventEmitter<boolean>();
  @Output() changeTheme = new EventEmitter<void>();
  @Output() newLanguage = new EventEmitter<string>();

  onToggleMobileNav() {
    this.isMobileNavOpened = !this.isMobileNavOpened;
    this.isMobileNavOpenedChange.emit(this.isMobileNavOpened);
    if (this.isMobileNavOpened) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  onToggleTheme() {
    this.changeTheme.emit();
  }

  onChangeLanguage(langCode: 'de' | 'en') {
    this.newLanguage.emit(langCode);
  }
}

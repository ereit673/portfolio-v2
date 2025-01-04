import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}

  @Output() newLanguage = new EventEmitter<string>();
  @Input({ required: true }) language!: string;
  isMobileNavOpened: boolean = false;

  onChangeLanguage(newLanguage: string) {
    this.newLanguage.emit(newLanguage);
  }

  onToggleMobileNav() {
    this.isMobileNavOpened = !this.isMobileNavOpened;
    if (this.isMobileNavOpened) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
    }
  }
}

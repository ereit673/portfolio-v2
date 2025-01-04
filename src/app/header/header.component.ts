import { Component } from '@angular/core';
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

  language: 'de' | 'en' = 'de';
  isMobileNavOpened: boolean = false;

  onChangeLanguage(language: 'de' | 'en') {
    this.language = language;
    this.translate.use(language);
  }

  onToggleMobileNav(){
    this.isMobileNavOpened = !this.isMobileNavOpened;
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
  }
}

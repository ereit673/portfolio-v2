import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
  }

language: 'de' | 'en' = 'de';

onChangeLanguage(language: 'de' | 'en'){
  this.language = language;
  this.translate.use(language);
}
}

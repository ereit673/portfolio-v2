import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {TranslateService, TranslateModule} from "@ngx-translate/core";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  theme: string | null = '';
  language: string = 'de';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
  }

  ngOnInit(): void {
    AOS.init();
    this.loadTheme();
    this.loadLanguage();
    this.setLanguage(this.language);
  }

  loadTheme(){
    this.theme = localStorage.getItem('theme');

    if(this.theme){
      document.body.classList.add('light-mode');
    }
  }

  loadLanguage(){
    const loadedLanguage = localStorage.getItem('language');
    if(loadedLanguage) {
      this.language = loadedLanguage;
    }
  }

  setLanguage(langCode: string){
    this.translate.use(langCode);
    localStorage.setItem('language', langCode);
    this.language = langCode;
  }

}

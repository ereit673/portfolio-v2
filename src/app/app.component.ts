import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from './footer/footer.component';
import {TranslateService, TranslateModule} from "@ngx-translate/core";
import { ImprintComponent } from './imprint/imprint.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [ImprintComponent, TranslateModule, RouterOutlet, HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  theme: string | null = '';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
  }

  ngOnInit(): void {
    AOS.init();
    this.loadTheme();
  }

  loadTheme(){
    this.theme = localStorage.getItem('theme');
    
    if(this.theme){
      document.body.classList.add('light-mode');
    }
  }

}

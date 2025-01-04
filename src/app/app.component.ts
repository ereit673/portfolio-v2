import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from './footer/footer.component';
import {TranslateService, TranslateModule} from "@ngx-translate/core";
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  imports: [ImprintComponent, TranslateModule, RouterOutlet, HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}

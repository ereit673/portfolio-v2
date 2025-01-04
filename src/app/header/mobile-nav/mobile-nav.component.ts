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

  onToggleMobileNav() {
    this.isMobileNavOpened = !this.isMobileNavOpened;

    this.isMobileNavOpenedChange.emit(this.isMobileNavOpened);
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
  }
}

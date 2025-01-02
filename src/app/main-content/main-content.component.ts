import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { FeaturedComponent } from "./featured/featured.component";

@Component({
  selector: 'app-main-content',
  imports: [HeroComponent, AboutComponent, FeaturedComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

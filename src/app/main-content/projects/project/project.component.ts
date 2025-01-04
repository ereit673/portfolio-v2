import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) odd!: boolean;
}

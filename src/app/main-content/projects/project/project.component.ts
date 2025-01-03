import { Component, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
@Input({required: true}) project!: Project;
@Input({required: true}) odd!: boolean;
}

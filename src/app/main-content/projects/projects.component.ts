import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { ProjectsService } from './projects.service';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsService = inject(ProjectsService);
  projects: Project[] = this.projectsService.projects;
}
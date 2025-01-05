import { Component, inject, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projectsService = inject(ProjectsService);
  translatedProjects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
   this.projectsService.getTranslatedProjects().subscribe((projects) => {
    this.translatedProjects = projects;
   });
    console.log(this.translatedProjects);
  }
}

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projectsService = inject(ProjectsService);
  translateService = inject(TranslateService);
  translatedProjects: Project[] = [];
  langChangeSubscription: any;

  constructor() {}

  ngOnInit(): void {
    this.loadProjects();
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      () => {
        this.loadProjects();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadProjects(): void {
    this.projectsService.getTranslatedProjects().subscribe((projects) => {
      this.translatedProjects = projects;
    });
  }
}

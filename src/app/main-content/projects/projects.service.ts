import { Injectable } from '@angular/core';
import { Project, ProjectToTranslate } from './project.model';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private translate: TranslateService) {}

  projects: Project[] = [
    {
      id: '1',
      title: 'DABubble',
      imgPath: 'img/projects/dabubble.png',
      techStack: 'Angular | Firebase | JavaScript | HTML | CSS',
      descriptionKey: 'projects.dabubble.description',
      projectLink: 'https://dabubble.alexeremie.com/',
      githubLink: 'https://github.com/ereit673/DABubble',
    },
    {
      id: '2',
      title: 'Coderr',
      imgPath: 'img/projects/coderr.png',
      techStack: 'Django | Django REST framework | Python',
      descriptionKey: 'projects.coderr.description',
      projectLink: 'https://coderr.alexeremie.com/',
      githubLink: 'https://github.com/ereit673/coderr-backend',
    },
    {
      id: '3',
      title: 'Videoflix',
      imgPath: 'img/projects/videoflix.png',
      techStack:
        'Django | Django REST framework | PostgreSQL | Redis | Django rq | Docker',
      descriptionKey: 'projects.videoflix.description',
      projectLink: 'https://videoflix.alexeremie.com/',
      githubLink: 'https://github.com/ereit673/videoflix-backend',
    },
    {
      id: '4',
      title: 'El Pollo Loco',
      imgPath: 'img/projects/elpolloloco.png',
      techStack: 'JavaScript | HTML | CSS',
      descriptionKey: 'projects.elpolloloco.description',
      projectLink: 'https://elpolloloco.alexeremie.com/',
      githubLink: 'https://github.com/ereit673/elpolloloco',
    },
  ];

  getTranslatedProjects(): Observable<Project[]> {
    return new Observable((observer) =>
      this.projects.forEach((project) => {
        this.translate
          .get(project.descriptionKey)
          .subscribe((translatedDescription) => {
            project.description = translatedDescription;
          });
        observer.next(this.projects);
        observer.complete();
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: Project[] = [
    {
      id: '1',
      title: 'DABubble',
      imgPath: 'img/projects/dabubble.png',
      techStack: 'Angular | Firebase | JavaScript | HTML | CSS',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      link: 'https://join.alexeremie.com/',
    },
    {
      id: '2',
      title: 'Join',
      imgPath: 'img/projects/join.png',
      techStack: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://join.alexeremie.com/',
    },
    {
      id: '3',
      title: 'El Pollo Loco',
      imgPath: 'img/projects/elpolloloco.png',
      techStack: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: 'https://elpolloloco.alexeremie.com/',
    },
  ];
}

export interface Project {
  id: string;
  title: string;
  imgPath: string;
  techStack: string;
  description?: string;
  descriptionKey: string;
  projectLink: string;
  githubLink: string;
}

export interface ProjectToTranslate {
  id: string;
  title: string;
  imgPath: string;
  techStack: string;
  descriptionKey: string;
  projectLink: string;
  githubLink: string;
}

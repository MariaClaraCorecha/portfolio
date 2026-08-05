import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

interface TechCategory {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-technologies',
  imports: [MatChipsModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  readonly categories: TechCategory[] = [
    { name: 'Frontend', items: ['Angular', 'TypeScript', 'Angular Material', 'HTML', 'SCSS'] },
    { name: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs'] },
    { name: 'Ferramentas', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];
}

import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { getTechIcon } from '../shared/tech-icon';

interface TechCategory {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-technologies',
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  readonly categories: TechCategory[] = [
    { name: 'Frontend', items: ['Angular', 'TypeScript', 'Angular Material', 'HTML', 'SCSS'] },
    {
      name: 'Backend',
      items: ['PHP', 'Java','Laravel', 'JavaScript', 'Linux', 'REST APIs', 'MySQL', 'PostgreSQL', 'SQLite'],
    },
    {
      name: 'Ferramentas',
      items: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ IDEA', 'Figma', 'Banco de Dados', 'Trello'],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

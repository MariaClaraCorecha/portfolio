import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { getTechIcon } from '../shared/tech-icon';

interface TechCategory {
  name: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-technologies',
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  readonly categories: TechCategory[] = [
    {
      name: 'Frontend',
      icon: 'web',
      items: ['Angular', 'TypeScript', 'Angular Material', 'HTML', 'SCSS'],
    },
    {
      name: 'Backend',
      icon: 'dns',
      items: [
        'PHP',
        'Java',
        'Laravel',
        'JavaScript',
        'Linux',
        'REST APIs',
        'MySQL',
        'PostgreSQL',
        'SQLite',
      ],
    },
    {
      name: 'Ferramentas',
      icon: 'build',
      items: [
        'Git',
        'GitHub',
        'Docker',
        'VS Code',
        'IntelliJ IDEA',
        'Figma',
        'Banco de Dados',
        'Trello',
      ],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

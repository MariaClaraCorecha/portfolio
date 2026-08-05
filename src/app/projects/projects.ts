import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      title: 'Projeto Exemplo 1',
      description: 'Descreva aqui o objetivo e o resultado deste projeto.',
      tech: ['Angular', 'TypeScript'],
      link: '#',
    },
    {
      title: 'Projeto Exemplo 2',
      description: 'Descreva aqui o objetivo e o resultado deste projeto.',
      tech: ['Angular Material', 'SCSS'],
      link: '#',
    },
    {
      title: 'Projeto Exemplo 3',
      description: 'Descreva aqui o objetivo e o resultado deste projeto.',
      tech: ['TypeScript', 'RxJS'],
      link: '#',
    },
  ];
}

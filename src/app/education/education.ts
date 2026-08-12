import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface EducationEntry {
  course: string;
  institution: string;
  period: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly entries: EducationEntry[] = [
    {
      course: 'Ciência da Computação',
      institution: 'Faci Wyden - Batista Campos',
      period: '2024 — previsão de conclusão no 1º semestre de 2028',
      status: 'Em andamento',
      description:
        'Graduação com foco em desenvolvimento de software Full Stack, abrangendo lógica de programação, estruturas de dados, algoritmos, Programação Orientada a Objetos (POO), banco de dados relacionais (SQL), arquitetura de sistemas e engenharia de software.',
    },
  ];
}

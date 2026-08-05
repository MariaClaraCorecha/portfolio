import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly entries: ExperienceEntry[] = [
    {
      role: 'Cargo Atual',
      company: 'Nome da Empresa',
      period: '2024 — atual',
      description: 'Descreva aqui suas principais responsabilidades e conquistas nesse cargo.',
    },
    {
      role: 'Cargo Anterior',
      company: 'Nome da Empresa',
      period: '2022 — 2024',
      description: 'Descreva aqui suas principais responsabilidades e conquistas nesse cargo.',
    },
  ];
}

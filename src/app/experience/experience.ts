import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { getTechIcon } from '../shared/tech-icon';

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly entries: ExperienceEntry[] = [
    {
      role: 'Auxiliar de TI',
      company: 'Grupo Mônaco',
      period: '2026 — Atual',
      summary:
        'Desenvolvedora de Software Full Stack júnior, responsável pelo desenvolvimento, manutenção e evolução de sistemas internos com soluções backend e frontend, aplicando Clean Architecture e boas práticas de engenharia de software.',
      responsibilities: [
        'Desenvolvimento de sistemas completos em PHP, Laravel, Angular e TypeScript, com Clean Architecture, atendendo às demandas internas da empresa',
        'Criação e manutenção de APIs RESTful para integração entre os sistemas internos da empresa',
        'Desenvolvimento e manutenção de sistemas internos utilizados por diferentes áreas da empresa, com foco em performance e usabilidade',
        'Implementação de melhorias e novas funcionalidades em sistemas já existentes',
        'Atendimento e suporte técnico aos usuários via helpdesk, garantindo a continuidade das operações',
        'Aplicação de Clean Architecture, controle de versão com Git/GitHub e boas práticas de desenvolvimento no dia a dia',
      ],
      technologies: [
        'Angular',
        'PHP',
        'Linux',
        'Docker',
        'Clean Architecture',
        'REST API',
        'Banco de Dados',
        'SQLite',
        'Trello',
        'Git',
        'GitHub',
      ],
    },
    {
      role: 'Estagiário de TI - Desenvolvimento',
      company: 'Grupo Mônaco Diesel',
      period: 'Janeiro de 2026 — Março de 2026',
      summary:
        'Estágio em Desenvolvimento de Software no departamento de TI, com primeiro contato com o ambiente corporativo de tecnologia, aplicando Clean Architecture e boas práticas de desenvolvimento desde o início da carreira.',
      responsibilities: [
        'Apoio no desenvolvimento e na evolução de sistemas internos da empresa utilizando PHP e Angular',
        'Suporte à manutenção de bancos de dados e ao atendimento técnico via helpdesk',
        'Primeiro contato com Clean Architecture e frameworks modernos de frontend e backend',
      ],
      technologies: ['PHP', 'Docker', 'Linux', 'Clean Architecture', 'Angular Material', 'SQLite'],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

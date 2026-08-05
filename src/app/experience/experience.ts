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
        'Desenvolvedora de software júnior, atuando no desenvolvimento e na manutenção de sistemas internos com soluções backend e frontend.',
      responsibilities: [
        'Desenvolvimento de sistemas completos em Java, atendendo às demandas internas da empresa',
        'Criação de APIs para integração entre os sistemas internos da empresa',
        'Desenvolvimento e manutenção de sistemas internos utilizados por diferentes áreas da empresa',
        'Implementação de melhorias e novas funcionalidades em sistemas já existentes',
        'Atendimento e suporte técnico aos usuários via helpdesk, garantindo a continuidade das operações',
        'Aplicação de princípios de Clean Architecture e boas práticas de desenvolvimento no dia a dia',
      ],
      technologies: [
        'Angular',
        'React',
        'Java',
        'PHP',
        'Linux',
        'Docker',
        'Arquitetura Limpa',
        'API',
        'Banco de Dados',
      ],
    },
    {
      role: 'Estagiário de TI - Desenvolvimento',
      company: 'Grupo Mônaco Diesel',
      period: 'Janeiro de 2026 — Março de 2026',
      summary:
        'Estágio no departamento de TI, com atuação no setor de desenvolvimento de software e primeiro contato com o ambiente corporativo de tecnologia.',
      responsibilities: [
        'Apoio no desenvolvimento e na evolução dos sistemas internos da empresa',
        'Suporte à manutenção de bancos de dados e ao atendimento via helpdesk',
        'Contato com arquiteturas limpas e frameworks modernos de frontend e backend',
      ],
      technologies: ['Java', 'PHP', 'Docker', 'Linux', 'Arquitetura Limpa', 'Angular Material', 'React'],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

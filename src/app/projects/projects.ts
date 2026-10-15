import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { getTechIcon } from '../shared/tech-icon';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectCategory {
  key: 'frontend' | 'backend';
  name: string;
  icon: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly categories: ProjectCategory[] = [
    {
      key: 'frontend',
      name: 'Frontend',
      icon: 'web',
      projects: [
        {
          title: 'CatWorld - Site sobre Gatos',
          description:
            'Aplicação web responsiva sobre gatos, com quiz interativo e perfil de usuário para cadastro de informações pessoais, dados dos pets e histórico de vacinação. Desenvolvida com Angular, Angular Material, TypeScript e JavaScript, aplicando boas práticas de componentização e UX/UI, com autenticação via Google Cloud para persistência dos dados do usuário na nuvem.',
          tech: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'Google Cloud'],
          link: 'https://catworld-ten.vercel.app/',
        },
        {
          title: 'Landing Page - Padaria',
          description:
            'Landing page institucional criada para uma padaria, com foco em design moderno e experiência do usuário (UX/UI). Desenvolvida com Angular e TypeScript, apresentando produtos e informações do estabelecimento em uma interface responsiva, clara e visualmente atrativa.',
          tech: ['Angular', 'TypeScript'],
          link: 'https://landigpage-padaria.vercel.app/',
        },
        {
          title: 'HTTP Cats - Status HTTP com Gatos',
          description:
            'Site informativo sobre os códigos de resposta HTTP, ilustrados de forma divertida com gatinhos. Desenvolvido com Angular e TypeScript, apresenta o significado de cada status de forma visual e didática em uma interface responsiva.',
          tech: ['Angular', 'TypeScript'],
          link: 'https://ladingpage-http-cats.vercel.app/',
        },
      ],
    },
    {
      key: 'backend',
      name: 'Backend',
      icon: 'dns',
      projects: [
        {
          title: 'Biblioteca em Java',
          description:
            'Sistema de gerenciamento de biblioteca desenvolvido em Java, permitindo emprestar, vender e alugar livros, com banco de dados relacional MySQL para armazenar informações sobre livros, clientes e bibliotecários. Aplica Programação Orientada a Objetos (POO) e modelagem de dados, utilizando encapsulamento, herança e abstração como pilares da arquitetura do sistema.',
          tech: ['Java', 'POO', 'MySQL'],
          link: 'https://github.com/MariaClaraCorecha/Biblioteca',
        },
        {
          title: 'Estoque API - Controle de Estoque',
          description:
            'Sistema de controle de estoque com API REST em Java 21 e Spring Boot, persistência em PostgreSQL via Spring Data JPA e interface web em Angular Material. Permite gerenciar categorias e produtos, registrar entradas e saídas com atualização automática de saldo, emitir alertas de estoque baixo e acompanhar indicadores em um dashboard. Ambiente containerizado com Docker Compose.',
          tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Angular', 'Docker'],
          link: 'https://github.com/MariaClaraCorecha/estoque-api',
        },
        {
          title: 'NASA API - Fotos de Marte',
          description:
            'Aplicação em PHP que consome a API pública da NASA para exibir fotos capturadas pelos rovers em Marte, junto com as informações de cada registro. Pratica integração com APIs externas e tratamento de dados em JSON.',
          tech: ['PHP', 'API'],
          link: 'https://nasa-api-taupe-rho.vercel.app/',
        },
      ],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

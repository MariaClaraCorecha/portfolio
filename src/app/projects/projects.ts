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
  repo: string;
  site?: string;
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
          repo: 'https://github.com/MariaClaraCorecha/catworld',
          site: 'https://catworld-ten.vercel.app/',
        },
        {
          title: 'Landing Page - Padaria',
          description:
            'Landing page institucional criada para uma padaria, com foco em design moderno e experiência do usuário (UX/UI). Desenvolvida com Angular e TypeScript, apresentando produtos e informações do estabelecimento em uma interface responsiva, clara e visualmente atrativa.',
          tech: ['Angular', 'TypeScript'],
          repo: 'https://github.com/MariaClaraCorecha/landigpage-padaria',
          site: 'https://landigpage-padaria.vercel.app/',
        },
        {
          title: 'HTTP Cats - Status HTTP com Gatos',
          description:
            'Site informativo sobre os códigos de resposta HTTP, ilustrados de forma divertida com gatinhos. Desenvolvido com Angular e TypeScript, apresenta o significado de cada status de forma visual e didática em uma interface responsiva.',
          tech: ['Angular', 'TypeScript'],
          repo: 'https://github.com/MariaClaraCorecha/ladingpage-HTTPCats',
          site: 'https://ladingpage-http-cats.vercel.app/',
        },
        {
          title: 'Leitura - Leitor de PDF e EPUB',
          description:
            'Leitor de livros em PDF e EPUB desenvolvido com Angular e Angular Material (M3), com destaques em 12 cores, comentários com texto, emojis e áudio, marcadores de página e bibliotecas personalizadas organizadas por categoria. Conta com login via Google, perfil personalizável com temas e preferências de leitura, e persistência local em IndexedDB. Estruturado em Arquitetura Limpa, separando domínio, casos de uso e infraestrutura (PDF.js e epub.js).',
          tech: ['Angular', 'Angular Material', 'TypeScript', 'Arquitetura Limpa', 'Google Cloud'],
          repo: 'https://github.com/MariaClaraCorecha/livros',
          site: 'https://livros-silk.vercel.app/',
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
          repo: 'https://github.com/MariaClaraCorecha/biblioteca-api-backend',
        },
        {
          title: 'Estoque API - Controle de Estoque',
          description:
            'Sistema de controle de estoque com API REST em Java 21 e Spring Boot, persistência em PostgreSQL via Spring Data JPA e interface web em Angular Material. Permite gerenciar categorias e produtos, registrar entradas e saídas com atualização automática de saldo, emitir alertas de estoque baixo e acompanhar indicadores em um dashboard. Ambiente containerizado com Docker Compose.',
          tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Angular', 'Docker'],
          repo: 'https://github.com/MariaClaraCorecha/estoque-api',
        },
        {
          title: 'Lista de Mercado - API REST',
          description:
            'API REST para gerenciar uma lista de compras de mercado, desenvolvida em Java 21 e Spring Boot com Spring Data JPA, Bean Validation e banco H2 em memória. Permite criar, listar com filtros por status e categoria, atualizar, marcar itens como comprados e remover. Estruturada em Arquitetura Limpa, com um caso de uso por ação, tratamento global de exceções e documentação interativa via OpenAPI/Scalar.',
          tech: ['Java', 'Spring Boot', 'REST API', 'Arquitetura Limpa'],
          repo: 'https://github.com/MariaClaraCorecha/list-mercado',
        },
        {
          title: 'NASA API - Fotos de Marte',
          description:
            'Aplicação em PHP que consome a API pública da NASA para exibir fotos capturadas pelos rovers em Marte, junto com as informações de cada registro. Pratica integração com APIs externas e tratamento de dados em JSON.',
          tech: ['PHP', 'API'],
          repo: 'https://github.com/MariaClaraCorecha/nasa-api',
        },
      ],
    },
  ];

  readonly getTechIcon = getTechIcon;
}

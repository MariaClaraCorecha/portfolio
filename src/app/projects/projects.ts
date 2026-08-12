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
      title: 'CatWorld - Site sobre Gatos',
      description:
        'Site informativo sobre gatos, com quiz interativo e perfil de usuário para cadastrar informações pessoais, dados dos pets e histórico de vacinação. Desenvolvido com Angular, Angular Material, TypeScript e JavaScript, com autenticação via conta Google (Google Cloud) para salvar o progresso e os dados do usuário na nuvem.',
      tech: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'Google Cloud'],
      link: 'https://catworld-ten.vercel.app/',
    },
    {
      title: 'Biblioteca em Java',
      description:
        'Sistema de gerenciamento de biblioteca que permite emprestar, vender e alugar livros, com um banco de dados MySQL para armazenar informações sobre livros, clientes e bibliotecários. O projeto aplica conceitos de Programação Orientada a Objetos (POO) em Java, como encapsulamento, herança e abstração.',
      tech: ['Java', 'POO', 'MySQL'],
      link: 'https://github.com/MariaClaraCorecha/Biblioteca',
    },
    {
      title: 'Landing Page - Padaria',
      description:
        'Landing page criada para uma padaria, com foco em design e experiência do usuário (UX/UI). Desenvolvida com Angular e TypeScript, apresentando produtos e informações do estabelecimento de forma clara, responsiva e visualmente atrativa.',
      tech: ['Angular', 'TypeScript'],
      link: 'https://landigpage-padaria.vercel.app/',
    },
  ];
}

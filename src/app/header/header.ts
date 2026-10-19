import { Component, HostListener, inject, input, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActiveSectionService } from '../shared/active-section.service';

interface NavLink {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly activeSection = inject(ActiveSectionService);
  readonly title = input('Maria Clara');
  readonly githubUrl = 'https://github.com/MariaClaraCorecha';

  protected readonly scrolled = signal(false);

  readonly links: NavLink[] = [
    { id: 'sobre', label: 'Sobre', icon: 'person' },
    { id: 'formacao', label: 'Formação', icon: 'school' },
    { id: 'experiencia', label: 'Experiência', icon: 'work' },
    { id: 'tecnologias', label: 'Tecnologias', icon: 'memory' },
    { id: 'projetos', label: 'Projetos', icon: 'folder' },
    { id: 'contato', label: 'Contato', icon: 'mail' },
  ];

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}

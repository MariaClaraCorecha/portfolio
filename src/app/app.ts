import { Component, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Technologies } from './technologies/technologies';
import { Projects } from './projects/projects';
import { Feedback } from './feedback/feedback';
import { ActiveSectionService } from './shared/active-section.service';
import { RevealOnScrollDirective } from './shared/reveal-on-scroll.directive';

const SECTION_IDS = ['sobre', 'experiencia', 'tecnologias', 'projetos', 'contato'];

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    About,
    Experience,
    Technologies,
    Projects,
    Feedback,
    MatButtonModule,
    MatIconModule,
    RevealOnScrollDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly activeSection = inject(ActiveSectionService);

  protected readonly title = signal('PORTFÓLIO');
  protected readonly showBackToTop = signal(false);

  constructor() {
    afterNextRender(() => this.activeSection.observe(SECTION_IDS));
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 400);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

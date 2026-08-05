import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Technologies } from './technologies/technologies';
import { Projects } from './projects/projects';
import { Feedback } from './feedback/feedback';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, About, Experience, Technologies, Projects, Feedback],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('PORTFÓLIO');
}

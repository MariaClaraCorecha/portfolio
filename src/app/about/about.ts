import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Highlight {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly highlights: Highlight[] = [
    { icon: 'school', label: 'Estudante de Ciência da Computação' },
    { icon: 'code', label: 'Desenvolvedora Full Stack' },
    { icon: 'work', label: 'Auxiliar de TI no Grupo Mônaco' },
  ];
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Highlight {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly name = 'Maria Clara Corecha';
  readonly role = 'Desenvolvedora de Software Full Stack';
  readonly githubUrl = 'https://github.com/MariaClaraCorecha';
  readonly email = 'mariacorecha18@gmail.com';

  readonly highlights: Highlight[] = [
    { icon: 'school', label: 'Estudante de Ciência da Computação' },
    { icon: 'code', label: 'Desenvolvedora Full Stack' },
    { icon: 'work', label: 'Auxiliar de TI no Grupo Mônaco' },
  ];
}

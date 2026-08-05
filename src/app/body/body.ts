import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {}

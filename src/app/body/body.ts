import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Technologies } from '../technologies/technologies';
import { Projects } from '../projects/projects';
import { Feedback } from '../feedback/feedback';

@Component({
  selector: 'app-body',
  imports: [MatCardModule, MatButtonModule, About, Experience, Technologies, Projects, Feedback],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {}

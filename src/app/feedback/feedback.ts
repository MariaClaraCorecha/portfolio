import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const FEEDBACK_EMAIL = 'mariacorecha18@gmail.com';

@Component({
  selector: 'app-feedback',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback {
  private readonly formBuilder = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly email = FEEDBACK_EMAIL;
  readonly githubUrl = 'https://github.com/MariaClaraCorecha';

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = `Feedback de ${name} pelo portfólio`;
    const body = `${message}\n\nEnviado por: ${name} (${email})`;
    const mailtoUrl =
      `mailto:${FEEDBACK_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    this.snackBar.open('Abrindo seu cliente de e-mail para enviar o feedback...', 'Fechar', {
      duration: 5000,
    });
    this.form.reset();
  }
}

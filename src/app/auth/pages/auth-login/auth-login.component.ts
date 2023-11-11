import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services';
import { first } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

interface AuthFormModel {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  submitting = false;
  submitted = false;

  form: FormGroup<AuthFormModel> = new FormGroup<AuthFormModel>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.submitting = false;
        },
      });
  }
}

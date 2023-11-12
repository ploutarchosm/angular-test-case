import { Component, OnDestroy } from '@angular/core';
import { TProfileFormModel } from '../interfaces/profile.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first, Subject, takeUntil } from 'rxjs';
import { ProfileService } from '../../../shared';
import { AlertService } from '../../alert';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnDestroy {
  _notifier = new Subject<void>();
  form!: FormGroup<TProfileFormModel>;
  submitting = false;
  submitted = false;

  constructor(
    private profileService: ProfileService,
    private alertService: AlertService
  ) {
    this.profileService
      .initialProfile$()
      .pipe(takeUntil(this._notifier))
      .subscribe({
        next: profile => {
          this.form = new FormGroup<TProfileFormModel>({
            Id: new FormControl<number>(
              { value: profile?.Id!, disabled: true },
              { nonNullable: true }
            ),
            Email: new FormControl<string>(
              { value: profile?.Email!, disabled: true },
              { nonNullable: true }
            ),
            FirstName: new FormControl<string>(profile?.FirstName!, {
              nonNullable: true,
              validators: [Validators.required, Validators.maxLength(255)],
            }),
            LastName: new FormControl<string>(profile?.LastName!, {
              nonNullable: true,
              validators: [Validators.required, Validators.maxLength(255)],
            }),
            PhoneNumber: new FormControl<string>(profile?.PhoneNumber!, {
              nonNullable: true,
              validators: [Validators.maxLength(12)],
            }),
            WebSiteURL: new FormControl<string | null>(profile?.WebSiteURL!, {
              validators: [Validators.pattern('')],
            }),
          });
        },
      });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.profileService
      .updateProfile({
        Id: this.f.Id.value,
        FirstName: this.f.FirstName.value,
        LastName: this.f.LastName.value,
        PhoneNumber: this.f.PhoneNumber.value,
        WebSiteURL: this.f.WebSiteURL.value,
      })
      .pipe(first())
      .subscribe({
        next: r => {
          this.alertService.success('Successfully update profile', {
            autoClose: true,
          });
        },
        error: error => {
          this.submitting = false;
        },
      });
  }
  ngOnDestroy() {
    this._notifier.next();
    this._notifier.complete();
  }
}

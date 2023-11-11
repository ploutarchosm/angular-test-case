import { Component } from '@angular/core';
import { FormTyped } from '../../../shared/types/form.types';
import { IProfile } from '../interfaces/profile.interface';
import { FormControl, FormGroup } from '@angular/forms';

type TProfile = Omit<FormTyped<IProfile>, 'AuthToken' | 'Role'>;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {
  form: FormGroup<TProfile> = new FormGroup<TProfile>({
    Email: new FormControl<string>(
      { value: '', disabled: true },
      { nonNullable: true }
    ),
    FirstName: new FormControl<string>('', { nonNullable: true }),
    LastName: new FormControl<string>('', { nonNullable: true }),
    PhoneNumber: new FormControl<number>(0, { nonNullable: true }),
    WebSiteURL: new FormControl<string | null>(null),
  });
}

import { FormControl, FormGroup } from '@angular/forms';

export type FormTyped<T> = {
  [Key in keyof T]: FormControl<T[Key]>;
};

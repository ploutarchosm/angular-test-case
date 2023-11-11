import { Injectable } from '@angular/core';
import {AuthService} from "../../core/services";
import {TProfileServerModel} from "../../app/profile";

@Injectable()
export class ProfileService {
    constructor(private authService: AuthService) {}

    initialProfile$() {
        return this.authService.profile;
    }

    updateProfile(profile: TProfileServerModel) {
        return this.authService.updateProfile(profile)
    }

}

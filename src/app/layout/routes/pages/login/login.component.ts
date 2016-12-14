import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required])],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev: any, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    }

    ngOnInit() {

    }

}

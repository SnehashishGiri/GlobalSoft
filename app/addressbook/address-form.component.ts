import {Component, Inject} from 'angular2/core';
import { ,Router } from 'angular2/router';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {AddressService} from './address-service';

@Component({
    selector: 'person-item-form',
    templateUrl: 'app/addressbook/address-form.component.html',
    styleUrls:['app/addressbook/address-form.component.css']
})
export class AddressFormComponent {
    form;
    constructor(private formBuilder: FormBuilder, private _router: Router,
        private AddressItemService: AddressService){}

    ngOnInit() {
        this.form = this.formBuilder.group({
            'name': new Control('', Validators.compose([
                Validators.required])),
            'address': new Control('', Validators.compose([
                Validators.required, 
                ])),
            'email': new Control(''),
            'phoneNumber': new Control('')
        });
    }
    

    onSubmit(person) {
        console.log(person);
        this.AddressItemService.add(person);
        //.subscribe();
    }

    onBack(): void {
        this._router.navigate(['AddressBook']);
    }
}
import {Component,OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {IPerson} from './person';
import {AddressFilterPipe} from './address-filter.pipe';
import {AddressService} from './address-service';


@Component({
    templateUrl: 'app/addressbook/address-list.component.html',
    pipes:[AddressFilterPipe],
    directives: [ ROUTER_DIRECTIVES]
})


export class AddressListComponent implements OnInit{
    pageTitle:string='Contact Book Repository';
    listFilter:string='';
    persons:IPerson[];
    constructor(private _addressService:AddressService){

    };
   
    ngOnInit():void{
      this.persons= this._addressService.getPersons();
        //.subscribe(
            // persons=>this.persons=persons)
    };
    
    onContactDelete(person){
        console.log(person);
        this._addressService.delete(person)
        // .subscribe(()=>{
        //     this._addressService.getPersons()
        // });
    }
   
}
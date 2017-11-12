import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {AddressListComponent} from './addressbook/address-list.component';
import {AddressFormComponent} from './addressbook/address-form.component';
import {AddressService} from './addressbook/address-service';


@Component({
    selector: 'ad-app',
    template: ` 
    <div>
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
         <ul class='nav navbar-nav'>
          <li><a [routerLink]="['AddressBook']">Contact List</a></li>
          <li><a [routerLink]="['AddContact']">Add Contact</a></li>
         </ul>
        </div>
    </nav>
       <div class='container'>
         <router-outlet></router-outlet>
       </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:[AddressService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})
@RouteConfig([
    {path:'/addressBook',name:"AddressBook",component:AddressListComponent,useAsDefault:true},
    {path:'/addContact',name:"AddContact",component:AddressFormComponent},
])
export class AppComponent{
    
}
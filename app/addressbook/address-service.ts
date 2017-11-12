import {Injectable} from 'angular2/core';
import {IPerson} from './person';
import {Http,Response, URLSearchParams, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AddressService{
    persons:IPerson[]=[
        {
            "name":"snehashish",
            "address":"Singasandra",
            "email":"snehasis.iter@gmail.com",
            "phoneNumber": "9620466008"
        },
        {
            "name":"Rohan",
            "address":"HSR Layout",
            "email":"rohan.sinha@gmail.com",
            "phoneNumber": "9620468900"
        },
        {
            "name":"Vijay",
            "address":"Sarjapura",
            "email":"vijay.sinha@gmail.com",
            "phoneNumber": "9627868900"
        }
    ];
    private _addressBookUrl='api/persons/persons.json';
    constructor(private _http:Http){};
    getPersons() {
        console.log(this.persons);
        return this.persons;
    }
    
    add(person) {
        this.persons.push(person);
    }
    
    delete(person) {
        var index = this.persons.indexOf(person);
        if (index >= 0) {
            this.persons.splice(index, 1);
        }
    }
    




    // getPersons(): Observable<IPerson[]>{
    //     return this._http.get(this._addressBookUrl)
    //     .map((response:Response)=><IPerson[]>response.json())
    //     .catch(this.handleError);
    // }

    // private handleError(error:Response){
    //     console.log(error);
    //     return Observable.throw(error.json().error);
    // }

    // add(person) {
    //     console.log(person);
    //     var headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this._http.post(this._addressBookUrl, JSON.stringify(person), { headers: headers })
    //         .map(response => {});
    // }
    
    // delete(person) {
    //     return this._http.delete(`${this._addressBookUrl}/${person.name}`)
    //         .map(response => {});
    // }  
    
    
    
}
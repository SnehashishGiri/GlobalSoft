System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AddressService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AddressService = (function () {
                function AddressService(_http) {
                    this._http = _http;
                    this.persons = [
                        {
                            "name": "snehashish",
                            "address": "Singasandra",
                            "email": "snehasis.iter@gmail.com",
                            "phoneNumber": "9620466008"
                        },
                        {
                            "name": "Rohan",
                            "address": "HSR Layout",
                            "email": "rohan.sinha@gmail.com",
                            "phoneNumber": "9620468900"
                        },
                        {
                            "name": "Vijay",
                            "address": "Sarjapura",
                            "email": "vijay.sinha@gmail.com",
                            "phoneNumber": "9627868900"
                        }
                    ];
                    this._addressBookUrl = 'api/persons/persons.json';
                }
                ;
                AddressService.prototype.getPersons = function () {
                    console.log(this.persons);
                    return this.persons;
                };
                AddressService.prototype.add = function (person) {
                    this.persons.push(person);
                };
                AddressService.prototype.delete = function (person) {
                    var index = this.persons.indexOf(person);
                    if (index >= 0) {
                        this.persons.splice(index, 1);
                    }
                };
                AddressService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], AddressService);
                return AddressService;
                var _a;
            }());
            exports_1("AddressService", AddressService);
        }
    }
});
//# sourceMappingURL=address-service.js.map
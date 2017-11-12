System.register(['angular2/core', 'angular2/router', './address-filter.pipe', './address-service'], function(exports_1, context_1) {
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
    var core_1, router_1, address_filter_pipe_1, address_service_1;
    var AddressListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (address_filter_pipe_1_1) {
                address_filter_pipe_1 = address_filter_pipe_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            }],
        execute: function() {
            AddressListComponent = (function () {
                function AddressListComponent(_addressService) {
                    this._addressService = _addressService;
                    this.pageTitle = 'Contact Book Repository';
                    this.listFilter = '';
                }
                ;
                AddressListComponent.prototype.ngOnInit = function () {
                    this.persons = this._addressService.getPersons();
                    //.subscribe(
                    // persons=>this.persons=persons)
                };
                ;
                AddressListComponent.prototype.onContactDelete = function (person) {
                    console.log(person);
                    this._addressService.delete(person);
                    // .subscribe(()=>{
                    //     this._addressService.getPersons()
                    // });
                };
                AddressListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/addressbook/address-list.component.html',
                        pipes: [address_filter_pipe_1.AddressFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [address_service_1.AddressService])
                ], AddressListComponent);
                return AddressListComponent;
            }());
            exports_1("AddressListComponent", AddressListComponent);
        }
    }
});
//# sourceMappingURL=address-list.component.js.map
System.register(['angular2/core', 'angular2/router', 'angular2/common', './address-service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, address_service_1;
    var AddressFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            }],
        execute: function() {
            AddressFormComponent = (function () {
                function AddressFormComponent(formBuilder, _router, AddressItemService) {
                    this.formBuilder = formBuilder;
                    this._router = _router;
                    this.AddressItemService = AddressItemService;
                }
                AddressFormComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        'name': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required])),
                        'address': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                        ])),
                        'email': new common_1.Control(''),
                        'phoneNumber': new common_1.Control('')
                    });
                };
                AddressFormComponent.prototype.onSubmit = function (person) {
                    console.log(person);
                    this.AddressItemService.add(person);
                    //.subscribe();
                };
                AddressFormComponent.prototype.onBack = function () {
                    this._router.navigate(['AddressBook']);
                };
                AddressFormComponent = __decorate([
                    core_1.Component({
                        selector: 'person-item-form',
                        templateUrl: 'app/addressbook/address-form.component.html',
                        styleUrls: ['app/addressbook/address-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, address_service_1.AddressService])
                ], AddressFormComponent);
                return AddressFormComponent;
                var _a, _b;
            }());
            exports_1("AddressFormComponent", AddressFormComponent);
        }
    }
});
//# sourceMappingURL=address-form.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ui_router_ng2_1 = require("ui-router-ng2");
var forms_1 = require('@angular/forms');
/* App Root */
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
/* Feature Components */
var personal_component_1 = require('./personal/personal.component');
var work_component_1 = require('./work/work.component');
var address_component_1 = require('./address/address.component');
var result_component_1 = require('./result/result.component');
/* App Router */
var app_router_1 = require("./app.router");
var app_states_1 = require("./app.states");
/* Shared Service */
var formData_service_1 = require('./data/formData.service');
var workflow_service_1 = require('./workflow/workflow.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ui_router_ng2_1.UIRouterModule.forRoot({
                    states: app_states_1.appStates,
                    useHash: true,
                    config: app_router_1.UIRouterConfigFn
                })
            ],
            providers: [{ provide: formData_service_1.FormDataService, useClass: formData_service_1.FormDataService },
                { provide: workflow_service_1.WorkflowService, useClass: workflow_service_1.WorkflowService }],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, personal_component_1.PersonalComponent, work_component_1.WorkComponent, address_component_1.AddressComponent, result_component_1.ResultComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
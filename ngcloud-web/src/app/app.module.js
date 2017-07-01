"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var clarity_angular_1 = require('clarity-angular');
var app_component_1 = require('./app.component');
var resource_component_1 = require('./resource.component');
var content_component_1 = require('./resource/content/content.component');
var menu_component_1 = require('./resource/menu/menu.component');
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'resource', component: resource_component_1.ResourceComponent, children: [
            { path: 'list1Content', component: menu_component_1.MenuListComponent, outlet: 'list1' },
            { path: 'list2Content', component: content_component_1.ContentComponent, outlet: 'list2' }
        ] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuListComponent,
                content_component_1.ContentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                clarity_angular_1.ClarityModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                material_1.MaterialModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "world";
        this.closeMessage = "";
        this.indeterminateState = true;
        this.rootDirectory = [
            {
                name: "Applications",
                icon: "folder",
                expanded: true,
                files: [
                    {
                        icon: "calendar",
                        name: "Calendar",
                        active: true
                    },
                    {
                        icon: "line-chart",
                        name: "Charts",
                        active: false
                    },
                    {
                        icon: "dashboard",
                        name: "Dashboard",
                        active: false
                    },
                    {
                        icon: "map",
                        name: "Maps",
                        active: false
                    },
                ]
            },
            {
                name: "Files",
                icon: "folder",
                expanded: false,
                files: [
                    {
                        icon: "file",
                        name: "Cover Letter.doc",
                        active: false
                    },
                ]
            },
            {
                name: "Images",
                icon: "folder",
                expanded: false,
                files: [
                    {
                        icon: "image",
                        name: "Screenshot.png",
                        active: false
                    },
                ]
            }
        ];
        this.selected = [];
        this.toAdd = [];
        this.toDelete = [];
        this.users = [
            { name: "alice" },
            { name: "bob" },
            { name: "carol" },
        ];
    }
    AppComponent.prototype.onClose = function () {
        this.closeMessage = "The alert has been closed";
    };
    AppComponent.prototype.onDelete = function () {
        this.toDelete = this.selected.slice();
        return false;
    };
    AppComponent.prototype.onEdit = function () {
        this.toEdit = this.selected[0];
        return false;
    };
    AppComponent.prototype.onAdd = function () {
        this.toAdd = this.selected.slice();
    };
    //打开文件
    AppComponent.prototype.openFile = function (directoryName, fileName) {
        console.log("directoryName", directoryName);
        console.log("fileName", fileName);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

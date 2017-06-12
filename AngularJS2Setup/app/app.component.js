"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_list_component_1 = require("./movies/movie-list.component");
var movie_service_1 = require("./movies/movie.service");
var http_1 = require("@angular/http");
require("rxjs/RX"); //Load all features
var AppComponent = (function () {
    function AppComponent() {
        this.WelcomeMessage = "Welcome to my site";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "<h1>{{WelcomeMessage}}</h1>\n            <div>\n            <mm-movies></mm-movies>\n            </div>\n            ",
        directives: [movie_list_component_1.MoviesListComponent],
        providers: [movie_service_1.MovieService, http_1.HTTP_PROVIDERS]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
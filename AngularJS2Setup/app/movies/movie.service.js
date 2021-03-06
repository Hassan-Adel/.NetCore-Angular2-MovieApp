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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/RX");
var MovieService = (function () {
    function MovieService(_http) {
        this._http = _http;
        this._movieUrl = 'api/movies/movies.json';
    }
    //do lets us log a message after data is recieved
    MovieService.prototype.getMovies = function () {
        return this._http.get(this._movieUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error(error);
        var message = "Error status code " + error.status + " at " + error.url;
        return Observable_1.Observable.throw(message);
    };
    // Added for routing
    MovieService.prototype.getMovie = function (id) {
        return this.getMovies()
            .map(function (movies) { return movies.find(function (m) { return m.movieId === id; }); });
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map
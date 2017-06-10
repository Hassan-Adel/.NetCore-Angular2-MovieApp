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
var core_1 = require("@angular/core");
var MoviesListComponent = (function () {
    function MoviesListComponent() {
        this.pageTitle = "Movies List";
        this.imageWidth = 50;
        this.imaegMargin = 2;
        this.showPoster = true;
        this.movies = [
            {
                "movieId": 2,
                "movieName": "Titanic!",
                "movieStar": "DiCaprio",
                "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                "releaseDate": "3/13/2016",
                "price": 8.00,
                "starRating": 4.5,
                "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzg1MDA0MTU2Nl5BMl5BanBnXkFtZTcwMTMzMjkxNw@@._V1_.jpg"
            },
            {
                "movieId": 3,
                "movieName": "Jaws!",
                "movieStar": "Shaw",
                "description": "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.",
                "releaseDate": "4/13/2016",
                "price": 6.00,
                "starRating": 4.8,
                "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX651_CR0,0,651,999_AL_.jpg"
            }];
    }
    MoviesListComponent.prototype.toggleImage = function () {
        this.showPoster = !this.showPoster;
    };
    MoviesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "mm-movies",
            templateUrl: "movie-list.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesListComponent);
    return MoviesListComponent;
}());
exports.MoviesListComponent = MoviesListComponent;
//# sourceMappingURL=movie-list.component.js.map
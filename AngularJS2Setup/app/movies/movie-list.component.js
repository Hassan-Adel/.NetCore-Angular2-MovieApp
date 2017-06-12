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
var movie_filter_pipe_1 = require("./movie-filter.pipe");
var review_component_1 = require("../shared/review.component");
var movie_service_1 = require("./movie.service");
var MoviesListComponent = (function () {
    function MoviesListComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = "Movies List";
        this.imageWidth = 50;
        this.imaegMargin = 2;
        this.showPoster = true;
    }
    MoviesListComponent.prototype.toggleImage = function () {
        this.showPoster = !this.showPoster;
    };
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movieService.getMovies()
            .subscribe(function (myMovies) { return _this.movies = myMovies; }, function (error) { return _this.errorMessage = error; });
        console.log('Invoked : ngOnInit');
    };
    MoviesListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Movie List : ' + message;
    };
    return MoviesListComponent;
}());
MoviesListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "mm-movies",
        templateUrl: "movie-list.component.html",
        styleUrls: ["movie-list.component.css"],
        pipes: [movie_filter_pipe_1.MovieFilterPipe],
        directives: [review_component_1.ReviewComponent]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MoviesListComponent);
exports.MoviesListComponent = MoviesListComponent;
//# sourceMappingURL=movie-list.component.js.map
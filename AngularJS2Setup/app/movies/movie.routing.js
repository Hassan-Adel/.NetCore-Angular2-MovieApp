"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var movie_list_component_1 = require("./movie-list.component");
var movie_detail_component_1 = require("./movie-detail.component");
exports.movieRoutes = [
    { path: 'movies', component: movie_list_component_1.MovieListComponent },
    { path: 'movie/:id', component: movie_detail_component_1.MovieDetailComponent }
];
exports.movieRouting = router_1.RouterModule.forChild(exports.movieRoutes);
//# sourceMappingURL=movie.routing.js.map
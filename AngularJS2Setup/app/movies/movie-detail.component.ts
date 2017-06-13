import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './movie.service';
import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html'
})

export class MovieDetailComponent {
    pageTitle: string = 'Movie Detail!';
    movie: IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private _movieService: MovieService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMovie(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMovie(id: number) {
        this._movieService.getMovie(id).subscribe(
            movie => this.movie = movie,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/movies']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie Detail: ' + message;
    }

}
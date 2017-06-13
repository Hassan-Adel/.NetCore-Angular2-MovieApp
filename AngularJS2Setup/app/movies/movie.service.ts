import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovie } from "./movie";
import 'rxjs/RX'

@Injectable()
export class MovieService {
    private _movieUrl = 'api/movies/movies.json';
    constructor(private _http: Http) { }

    //do lets us log a message after data is recieved
    getMovies(): Observable<IMovie[]> {
        return this._http.get(this._movieUrl)
            .map((response: Response) => <IMovie[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);

    }

    // Added for routing
    getMovie(id: number): Observable<IMovie> {
        return this.getMovies()
            .map((movies: IMovie[]) => movies.find(m => m.movieId === id));
    }

}
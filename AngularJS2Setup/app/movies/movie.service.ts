import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
//import {Observable } from 'rxjs/Observable';
import { IMovie } from "./movie";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import 'rxjs/RX'

@Injectable()
export class MovieService {

    //constructor(private _http: Http) { }

    getMovies(): IMovie[] {
        //do lets us log a message after data is recieved
        return [
            {
                "movieId": 2,
                "movieName": "Titanic2!",
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

    //private handleError(error: Response) {
    //    console.error(error);
    //    let message = `Error status code ${error.status} at ${error.url}`;
    //    return Observable.throw(message);

    //}

}
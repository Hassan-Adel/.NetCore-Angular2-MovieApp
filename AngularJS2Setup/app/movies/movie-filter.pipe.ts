import  { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from "./movie";

@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform {
    //limit represents the maximium number of characters to be displayed n the view
    transform(value: IMovie[], filter: string): IMovie[] {
        filter = filter ? filter.toLowerCase() : null;
        return filter ? value.filter((movie: IMovie) =>
            movie.movieName.toLowerCase().indexOf(filter) != -1): value;
    }
}

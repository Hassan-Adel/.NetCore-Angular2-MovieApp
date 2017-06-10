export interface IMovie {
    movieId: number;
    movieName: string;
    movieStar: string;
    description?: string;
    releaseDate: string;
    price: number;
    starRating: number;
    imageUrl: string;
}
import { MovieModel } from "./movie.model";

export class SearchModel {
    public Response: boolean = false;
    public Search: MovieModel[] = [];
    public totalResults: string = '';
}
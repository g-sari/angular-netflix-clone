import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs/internal/Observable";
import { SearchModel } from "../shared/models/search.model";

@Injectable()
export class OmdbService {

    constructor(private http: HttpClient){}

    public searchMovies(query: string): Observable<SearchModel> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        let params = new HttpParams()
        .set("s", query);
        const omdbApiUrl = environment.omdbApiUrl + '/';
        return this.http.get<SearchModel>(omdbApiUrl, { headers, params });
    }
}
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { environment } from "@env/environment";

@Injectable()
export class HttpDefaultsInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({setParams: {'apikey': environment.omdbApiKey}});
        return next.handle(modifiedRequest);
    }
}
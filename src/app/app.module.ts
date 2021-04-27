import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListBoxComponent } from './components/movie-list-box/movie-list-box.component';
import { MovieListBoxContainerComponent } from './containers/movie-list-box/movie-list-box-container.component';
import { HttpDefaultsInterceptor } from './interceptors/http-defaults.interceptor';
import { OmdbService } from './services/omdb.service';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    MovieListBoxComponent,
    MovieListBoxContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OmdbService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpDefaultsInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

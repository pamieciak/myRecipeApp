import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingPipe } from './rating.pipe';
import { DescriptionPipe } from './description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RatingPipe,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

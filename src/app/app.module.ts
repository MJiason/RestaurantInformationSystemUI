import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MenuItemComponent} from './components/menu/menu-item/menu-item.component';
import {HttpClientModule} from "@angular/common/http";
import {DishComponent} from './components/dish/dish.component';
import {CardComponent} from './components/toolbar/card/card.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DishEditComponent } from './components/dish-edit/dish-edit.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { IngredientSelectComponent } from './components/dish-edit/ingredient-select/ingredient-select.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ToolbarComponent,
    MenuItemComponent,
    DishComponent,
    CardComponent,
    DishEditComponent,
    IngredientSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatChipsModule,
  ],
  providers: [CardComponent],
  entryComponents: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

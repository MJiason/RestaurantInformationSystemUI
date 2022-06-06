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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { IngredientSelectComponent } from './components/dish-edit/ingredient-select/ingredient-select.component';
import {MatChipsModule} from "@angular/material/chips";
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import { OrderItemComponent } from './components/order-item/order-item.component';
import {KitchenComponent} from "./components/kitchen/kitchen.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { WaiterComponent } from './components/waiter/waiter.component';
import {MatTableModule} from "@angular/material/table";
import { WaiterOrdersComponent } from './components/waiter/waiter-orders/waiter-orders.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {UnautorizeComponent} from "./components/login/unautorize/unautorize.component";


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
    ImageUploadComponent,
    OrderItemComponent,
    KitchenComponent,
    WaiterComponent,
    WaiterOrdersComponent,
    LoginComponent,
    PageNotFoundComponent,
    UnautorizeComponent,
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
    ImageCropperModule,
    FormsModule,
    NgxMatFileInputModule,
    ScrollingModule,
    MatTableModule,

  ],
  providers: [CardComponent],
  entryComponents: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

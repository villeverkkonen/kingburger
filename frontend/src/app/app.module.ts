import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { KitchenComponent } from './kitchen/kitchen.component'
import { NavComponent } from './nav/nav.component'
import { HomeComponent } from './home/home.component'
import { GrillComponent } from './grill/grill.component'
import { ShopComponent } from './shop/shop.component'
import { GalleryComponent } from './gallery/gallery.component'
import { PusherService } from './services/pusher.service'

@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    NavComponent,
    HomeComponent,
    GrillComponent,
    ShopComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    DragDropModule
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

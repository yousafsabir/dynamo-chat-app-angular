import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { ContactCardComponent } from './commonComponents/contact-card/contact-card.component';
import { ThemeSwitchComponent } from './commonComponents/theme-switch/theme-switch.component';
import { SearchBarComponent } from './commonComponents/search-bar/search-bar.component';
import { ReloadComponent } from './commonComponents/reload/reload.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    BodyComponent,
    ContactCardComponent,
    ThemeSwitchComponent,
    SearchBarComponent,
    ReloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

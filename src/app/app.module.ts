import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CarouselStoriesComponent } from './carousel-stories/carousel-stories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ListLinksProfileComponent } from './list-links-profile/list-links-profile.component';
import { CreateWorldComponent } from './create-world/create-world.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import {SearchPipe} from './users/search.pipe';
import {HoverDirective} from './users/hover.directive';
import {ZoomDirective} from './main/zoom.directive';

const routes = [
  {path: 'login', component: LoginPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarouselStoriesComponent,
    FooterComponent,
    LoginPageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    InputOutputComponent,
    ListLinksProfileComponent,
    CreateWorldComponent,
    CreateHeroComponent,
    MyIdeasComponent,
    UsersComponent,
    SearchPipe,
    HoverDirective,
    ZoomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

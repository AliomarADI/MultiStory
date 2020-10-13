import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainComponent} from './main/main.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {InputOutputComponent} from './input-output/input-output.component';
import {MyIdeasComponent} from './my-ideas/my-ideas.component';
import {CreateHeroComponent} from './create-hero/create-hero.component';
import {CreateWorldComponent} from './create-world/create-world.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'createHero', component: CreateHeroComponent },
  {path: 'createWorld', component: CreateWorldComponent },
  {path: 'myIdeas', component: MyIdeasComponent },
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

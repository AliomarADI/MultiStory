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
import {AuthGuard} from './Guards/auth/auth.guard';
import {UserFormDeactivateGuard} from './Guards/registerCheckGuard/user-form-deactivate.guard';
import {CheckFillinGInfoGuard} from './Guards/checkFillingInfo/check-fillin-ginfo.guard';
import {CheckFillinGInfoWorldGuard} from './Guards/checkFillingInfo/check-fillin-ginfo-world.guard';
import {POSTSComponent} from './posts/posts.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },

  {path: 'main', component: MainComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'register',
    component: RegisterPageComponent,
    canDeactivate: [UserFormDeactivateGuard],
  },
  {path: 'createHero',
    component: CreateHeroComponent,
    canDeactivate: [CheckFillinGInfoGuard]
  },
  {path: 'createWorld',
    component: CreateWorldComponent,
    canDeactivate: [CheckFillinGInfoWorldGuard],
  },
  {path: 'myIdeas', component: MyIdeasComponent },
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: POSTSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

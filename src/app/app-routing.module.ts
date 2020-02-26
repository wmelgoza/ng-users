import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 2. Import the UserComponent
import { UsersComponent }   from './users/users.component';
import { UserViewComponent }   from './user-view/user-view.component';
import { UserCreateComponent }   from './user-create/user-create.component';
import { UserEditComponent }   from './user-edit/user-edit.component';

// Import Articles
import { ArticlesComponent }   from './articles/articles.component';
import { ArticleViewComponent }   from './article-view/article-view.component';
import { ArticleCreateComponent }   from './article-create/article-create.component';
import { ArticleEditComponent }   from './article-edit/article-edit.component';

// Import Login
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


// 3. Declare your routes
const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit:id', component: UserEditComponent},

  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/view/:id', component: ArticleViewComponent },
  { path: 'articles/create', component: ArticleCreateComponent },
  { path: 'articles/edit/:id', component: ArticleEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

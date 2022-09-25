import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { NavComponent } from './nav/nav.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { SearchComponent } from './search/search.component';
import { ProfileMiniComponent } from './profile-mini/profile-mini.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import {FormsModule} from "@angular/forms";
import { CommentMiniComponent } from './comment-mini/comment-mini.component';
import { NewCommentModalComponent } from './new-comment-modal/new-comment-modal.component';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    PostCardComponent,
    NavbarComponent,
    AsidebarComponent,
    NavComponent,
    AppLogoComponent,
    SearchComponent,
    ProfileMiniComponent,
    IconBtnComponent,
    CommentMiniComponent,
    NewCommentModalComponent,
    PostsListComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestUsersComponent } from './rest-users/rest-users.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    GalleryComponent,
    RegisterComponent,
    ContactComponent,
    MeanComponent,
    MernComponent,
    JavaComponent,
    RestUsersComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

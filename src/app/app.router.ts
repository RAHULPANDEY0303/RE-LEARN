import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { CourseComponent } from './course/course.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { RestUsersComponent } from './rest-users/rest-users.component';
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'course', component: CourseComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mean', component: MeanComponent },
    { path: 'mern', component: MernComponent },
    { path: 'java', component: JavaComponent },
    { path: 'restusers', component: RestUsersComponent }
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);


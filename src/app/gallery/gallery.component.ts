import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  appList: any[] = [{
    "ID": "1",
    "url": './assets/images/one.png',
    "Name": 'Neha Pandey',
    "Master": 'Quality Assurance'
  },
  {
     "ID": "2",
     "url": './assets/images/three.png',
     "Name": 'Rahul Pandey',
     "Master": 'Front-End Developer'
  },
  {
    "ID": "3",
    "url": './assets/images/three.png',
    "Name": 'Rahul Pandey',
    "Master": 'Front-End Developer'
 },
 {
  "ID": "4",
  "url": './assets/images/one.png',
  "Name": 'Neha Pandey',
  "Master": 'Quality Assurance'
}];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent {
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
]
}

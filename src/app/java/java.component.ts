import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
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
]
}

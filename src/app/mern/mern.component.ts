import { Component } from '@angular/core';

@Component({
  selector: 'app-mern',
  templateUrl: './mern.component.html',
  styleUrls: ['./mern.component.css']
})
export class MernComponent {
  appList: any[] = [{
    "ID": "1",
    "url": './assets/images/one.png',
    "Name": 'Neha Pandey',
    "Master": 'Quality Assurance'
  },
];
}

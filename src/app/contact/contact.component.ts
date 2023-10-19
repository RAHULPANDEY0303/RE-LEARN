import { Component,OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public user!: User; // our model

  ngOnInit() { // we will initialize our form here
   this.user = {
   name: '',
   email: '',
   phone: '',
   remarks: ''
   };
   }
   save(model: User, isValid: boolean) 
   { 
   // check if model is valid// if valid, call API to save customer
   console.log(model, isValid);
   } 
}

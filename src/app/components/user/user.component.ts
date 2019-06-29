import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  constructor() {
  
   }

  ngOnInit() {
   
      this.user={
        firstName:'kutty',
      lastName:'selva',
      age:20,
      address:{
        street:'park view',
        city:'chennai',
        state:'TN'
      }
      }
  }

}

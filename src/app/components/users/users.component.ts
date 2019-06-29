import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User.models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('userForm',{static:true}) form:any;
  user:User={
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    },
    image:'',
    isActive:false,
    balance:null,
    registered:'',
    hide:false
  }
users:User[];
showExtended:boolean=true;
loaded :boolean=false;
enableAdd:boolean=false;
hide:boolean=true;
showForm:boolean=false;
  constructor() { }

  ngOnInit() {
   
      this.users=[
        {
          firstName:'kutty',
        lastName:'selva',
        age:20,
        address:{
          street:'park view',
          city:'chennai',
          state:'TN'
        },
        image:'http://lorempixel.com/200/200/people/1',
        isActive:false,
        balance:100,
        registered:new Date('09/02/2019 08:08:00'),
        hide:true

        },
        {
          firstName:'john',
        lastName:'selva',
        age:20,
        address:{
          street:'jail view',
          city:'madurai',
          state:'TN'
        },
        image:'http://lorempixel.com/200/200/people/2',
        isActive:true,
        balance:150,
        registered:new Date('01/04/2019 08:08:00'),
        hide:true


        },
        {
          firstName:'smith',
        lastName:'selva',
        age:20,
        address:{
          street:'ocean view',
          city:'chennai',
          state:'TN'
        },
        image:'http://lorempixel.com/200/200/people/3',
        isActive:true,
        balance:200,
        registered:new Date('05/02/2019 08:08:00'),
        hide:true
        },
        {
          firstName:'kutty',
        lastName:'selva',
        age:20,
        address:{
          street:'volcano view',
          city:'chennai',
          state:'US'
        },
        image:'http://lorempixel.com/200/200/people/4',
        isActive:false,
        balance:300,
        registered:new Date('04/02/2019 08:08:00'),
        hide:true

        }
      ];
      this.loaded=true;
    
   
    this.showExtended=false;
    
// this.addUser({
//   firstName:'kutty',
//   lastName:'paiyan',
//   age:10,
//   address:{
//     street:'volcano view',
//     city:'chennai',
//     state:'US'
//   },
//   image:'http://lorempixel.com/200/200/people/5'

// });

  }
  addUser(){
    const today = new Date();
    this.user={...this.user,hide:true,registered:today,isActive:true};
    this.users.unshift(this.user);
  }
 toggleHide(user:User){
   user.hide=!user.hide;
 }
 onSubmit(e){
   e.preventDefault();
   this.addUser(); 
 }


}

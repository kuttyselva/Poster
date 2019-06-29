import { Injectable } from '@angular/core';
import { User } from '../models/User.models';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[]; 
  data:Observable<any>;
  constructor() {
    
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
   }
   getUsers():Observable<User[]>{
     return of(this.users);

   }
   addUser(user:User){
     this.users.unshift(user);
   }
}

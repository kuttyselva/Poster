import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User.models';
import { DataService } from 'src/app/service/data.service';

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
  constructor(private dataService:DataService) { }

  ngOnInit() {
   
      this.loaded=true;
    this.dataService.getUsers().subscribe(users=>{
      this.users=users;
      this.loaded=true;
    });
   
    this.showExtended=false;
    


  }
  addUser(){
    const today = new Date();
    this.user={...this.user,hide:true,registered:today,isActive:true};
    this.dataService.addUser(this.user);
  }
 toggleHide(user:User){
   user.hide=!user.hide;
 }
 onSubmit(e){
   e.preventDefault();
   this.addUser(); 
 }


}

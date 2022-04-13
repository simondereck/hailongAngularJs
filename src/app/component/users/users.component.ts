import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [
    './users.component.scss',
    "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class UsersComponent implements OnInit{
  title = "Users"
  users = []
  selectId = -1
  selectKey = 0
  constructor(private readonly requestService:RequestService) {
    const self = this;
    this.requestService.getAllUsers(function (value:any) {
      self.users.push.apply(self.users,value);
      // this.success = true
      console.log(self.users);
    },function (error:any) {
      console.log(error);
    });
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(res => {
    //     this.users.push.apply(this.users,res);
    //     // this.success = true
    //     console.log(this.users);
    //   });
  }

  ngOnInit(): void {

  }


  selectUser(event:any): void {
    let selected = event.target.value;
    if (selected==""){
      this.selectId = -1;
    }else{
      this.selectId = parseInt(selected);
      for (let key in this.users){
        if (this.users[key]["id"]==this.selectId){
          this.selectKey = parseInt(key);
          break;
        }
      }
    }
    console.log(this.selectId)
  }

}

import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: [
    './photos.component.scss',
    "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class PhotosComponent implements OnInit {

  photos = []
  albums = {}
  constructor(private readonly requestService:RequestService) { }

  ngOnInit(): void {
    let self = this;
    this.requestService.getAllPhotos(function (res:any) {
      self.photos.push.apply(self.photos,res);
      console.log(self.photos);
    },function (error:any) {
      console.log(error);
    });
  }

}

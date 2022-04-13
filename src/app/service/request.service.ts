import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "https://jsonplaceholder.typicode.com/";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  getAllUsers(successCallback:any,errorCallback:any) {
    // this.http.get(process.env.react_app_base_url+"users").forEach(value => {
    //   successCallback(value);
    // }).catch(function (error) {
    //   errorCallback(error);
    // });
    this.http.get(url+"users").forEach(value => {
      successCallback(value);
    }).catch(function (error) {
      errorCallback(error);
    });
  }

  getAllPhotos(successCallback:any,errorCallback:any){
    this.http.get(url+"photos").forEach(value => {
      successCallback(value);
    }).catch(function (error) {
      errorCallback(error);
    });
  }
}

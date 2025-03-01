import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor() { }

  validRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

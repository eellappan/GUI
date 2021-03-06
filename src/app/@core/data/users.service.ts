import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  // private users = {
  //   nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
  //   eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
  //   jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
  //   lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
  //   alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
  //   kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  //   Ellappan: {name: 'Ellappan Elumalai', picture: 'assets/images/nick.png'},
  // };
  private users = {
    Ellappan: {name: 'Ellappan Elumalai', picture: 'assets/images/nick.png'},
    kishore: { name: 'kishore', picture: 'assets/images/jack.png' },
    priya: { name: 'priya', picture: 'assets/images/eva.png' },
    karthi: { name: 'karthi', picture: 'assets/images/alan.png' },
    Kumar: { name: 'Kumar', picture: 'assets/images/alan.png' },
    Ramya: { name: 'Ramya', picture: 'assets/images/kate.png' }
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}

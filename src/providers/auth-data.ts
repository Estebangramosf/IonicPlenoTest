/* Core Imports */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthData {
	fireAuth: any;
  	constructor(public af: AngularFire) {
        af.auth.subscribe( user => {
            if (user) {
                this.fireAuth = user.auth;
                console.log(user);
            }
        });    
  	}

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.login({
      email: newEmail,
      password: newPassword
    });
  }

  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.af.auth.logout();
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.createUser({ 
      email: newEmail, 
      password: newPassword 
    });
  }

}

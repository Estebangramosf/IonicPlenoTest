/* Core Imports */
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import firebase from 'firebase';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

/* Injectable declaration */
@Injectable()

/* Exportable class how dependency injection */
export class AuthData {
	fireAuth: any;
	constructor ( public af: AngularFire ) {  
		// Validate with observable method if exist active sesion by user and asign user to private var fireAuth
		af.auth.subscribe( user => {
			if (user) {
				this.fireAuth = user.auth;
				console.log(user);
			}
		});    
	}

	// Function to validate login with email and password, and send to login function in AngularFire login the parameters to login
	loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
		return this.af.auth.login({
			email: newEmail,
			password: newPassword
		});
	}

	// Function to send a email to reset password with firebase lib
	resetPassword(email: string): firebase.Promise<any> {
		return firebase.auth().sendPasswordResetEmail(email);
	}

	// Function to close actual user session
	logoutUser(): firebase.Promise<any> {
		return this.af.auth.logout();
	}

	// Function to create a new user with firebase lib
	signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
		return this.af.auth.createUser({ 
			email: newEmail, 
			password: newPassword 
		});
	}

}

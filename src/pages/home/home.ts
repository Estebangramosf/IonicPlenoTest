/* Core Imports */
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';


/* Service Imports */
import { AuthData } from '../../providers/auth-data';

/* Component declaration */
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

/* Exportable class */
export class HomePage {

	constructor ( public navCtrl: NavController, public authData: AuthData, public app: App ) {
		window.localStorage.removeItem('user');
		/* Validations that catch the non logged user */
		//Second validation if user not logged in and redirect to login
		if (!this.isAlreadyLoggedIn) {
			console.log('Not login yet, reddirecting to login page...');
			this.navCtrl.push(LoginPage);
		}	
	}

	/* Method to validate if user is logged in */
	isAlreadyLoggedIn(){
		let user = window.localStorage.getItem('user');
		return user !== null && user !== undefined;
	}

	/* Method called equals that service AuthData but here uses object method to close user 
	session and redirect to login page */
  	logoutUser():void {
  		this.authData.logoutUser();
  		const root = this.app.getRootNav();
		root.popToRoot ();
  	}
}

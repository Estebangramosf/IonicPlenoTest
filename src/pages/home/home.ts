/* Core Imports */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/* Component declaration */
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

/* Exportable class */
export class HomePage {

	constructor(
		public navCtrl: NavController
	) {
		window.localStorage.removeItem('user');
		/* Validations that catch the non logged user */
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

}

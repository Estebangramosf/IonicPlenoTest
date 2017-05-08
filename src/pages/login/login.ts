/* Core Imports */
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/* Page Imports */
//import { SignInPage } from './signin';

/* Service Imports */
//import { UserService } from '../../services/user.service';
	
/* Component declaration */
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

/* Exportable class */
export class LoginPage{
	user = {"email":"","password":""};
	constructor(
		private 	alertCtrl: AlertController,
	 	public  	loadingCtrl: LoadingController,
	 	public		navCtrl: NavController,
	 	//private 	userService: UserService, 
 	){
 		/*
		DBService.openDatabase();
		DBService.createTable();
		console.dir(DBService.getAll());
		*/
 	}

 	/* On angular init do: */
 	ngOnInit(){
 		console.log('Arrancó el init');
 	}

 	login(){}

	signIn(){}
}

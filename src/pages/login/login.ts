/* Core Imports */
import { Component, ElementRef, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';

/* Page Imports */
//import { SignInPage } from './signin';

/* Component Imports */
import { TabsPage } from '../tabs/tabs';

/* Service Imports */
//import { UserService } from '../../services/user.service';
	
/* Component declaration */
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

/* Exportable class */
export class LoginPage implements OnInit{
	user = {"email":"","password":""};
	constructor(
		private 	alertCtrl: AlertController,
		public		navCtrl: NavController,
	 	public  	loadingCtrl: LoadingController,
	 	public 		element: ElementRef,	 	
	 	//private 	userService: UserService, 
 	){ 		
 		/* Initialize var for get elements with selector queries */
 		this.element.nativeElement;
 		/*
		DBService.openDatabase();
		DBService.createTable();
		console.dir(DBService.getAll());
		*/
 	}

 	/* On angular init do: */
 	ngOnInit(){
 		console.log('Arrancó el init');
 		var root = this.element.nativeElement;
 		var loginButton = root.querySelector('#loginButton');
 		var loginTwitter = root.querySelector('#loginTwitter');
 		var loginFacebook = root.querySelector('#loginFacebook');
 		loginButton.addEventListener('click', this.onClick.bind(this));
 		loginTwitter.addEventListener('click', this.onTwitterLogin.bind(this));
 		loginFacebook.addEventListener('click', this.onFacebookLogin.bind(this));
 	}

 	/* Method to login with event listener from button id */
 	onClick(e):void{
 		console.log('Button clicked');
 		this.navCtrl.pop();
 	}

 	/* Method to login with twitter on event listener from button id */
 	onTwitterLogin(e):void{

 	}

 	/* Method to login with facebook on event listener from button id */
 	onFacebookLogin(e):void{

 	}

	/* Method to login with tap method */
 	login():void{
 		console.log('Trying login with tap method')
 	}

 	/* Method to login with twitter on tap method */
 	loginWithTwitter():void{
 		console.log('Trying login with twitter tap method')
 	}

 	/* Method to login with facebook on tap method */
 	loginWithFacebook():void{
 		console.log('Trying login with facebook tap method')
 	}

 	/* Method to sign in on application */
	signIn():void{
		console.log('Trying sign with tap method')
	}
}

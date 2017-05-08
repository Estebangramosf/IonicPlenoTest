/* Core Imports */
import { Component, ElementRef, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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
	//user = {"email":"","password":""};
	root:any;
	constructor(
		private 	alertCtrl: AlertController,
		public		navCtrl: NavController,
	 	public  	loadingCtrl: LoadingController,
	 	public 		element: ElementRef,
	 	public		af: AngularFire, 	
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
 		this.root = this.element.nativeElement;
 		/*
 		var loginButton = this.root.querySelector('#loginButton');
 		var loginTwitter = this.root.querySelector('#loginTwitter');
 		var loginFacebook = this.root.querySelector('#loginFacebook');
 		var loginGooglePlus = this.root.querySelector('#loginGooglePlus');
 		var loginGithub = this.root.querySelector('#loginGithub');
 		loginButton.addEventListener('click', this.onClick.bind(this));
 		loginTwitter.addEventListener('click', this.onTwitterLogin.bind(this));
 		loginFacebook.addEventListener('click', this.onFacebookLogin.bind(this));
 		loginGooglePlus.addEventListener('click', this.onGooglePlusLogin.bind(this));
 		loginGithub.addEventListener('click', this.onGithubLogin.bind(this));
 		*/
 	}

 	/* Method to login with event listener from button id */
 	onClick(e):void{
 		console.log('Button clicked');
 		let self = this;
 		let email:string = this.root.querySelector('#email').value;
 		let password:string = this.root.querySelector('#password').value;
 		this.af.auth.login({
 			email: email,
 			password: password
 		},{
 			provider: AuthProviders.Password,
 			method: AuthMethods.Password, 			
 		}).then((response)=>{
 			console.log('Login with Twitter success',response);
 			let user = {
 				email:response.auth.email,
 				picture:response.auth.photoURL,
 			};
 			window.localStorage.setItem('user',JSON.stringify(user));
 			//self.navCtrl.pop();
 			self.navCtrl.push(TabsPage);
 		}).catch((error)=>{
 			console.log(error);
 		});
 	}

 	/* Method to login with twitter on event listener from button id */
 	onTwitterLogin(e):void{
 		console.log('Logging in with Twitter');
 		let self = this;
 		this.af.auth.login({
 			provider: AuthProviders.Twitter,
 			method: AuthMethods.Popup
 		}).then((response)=>{
 			console.log('Login with Twitter success',response);
 			let user = {
 				email:response.auth.email,
 				picture:response.auth.photoURL,
 			};
 			window.localStorage.setItem('user',JSON.stringify(user));
 			//self.navCtrl.pop();
 			self.navCtrl.push(TabsPage);
 		}).catch((error)=>{
 			//console.log(error);
 			if (error !== null || error !== undefined) { //Quiere decir que ya está registrado con otra cuenta
				self.navCtrl.push(TabsPage);
 			}else{
 				alert('Ocurrió un problema con el inicio de sesión');
 			}
 		});
 	}

 	/* Method to login with facebook on event listener from button id */
 	onFacebookLogin(e):void{
 		console.log('Logging in with Facebook');
 		let self = this;
 		this.af.auth.login({
 			provider: AuthProviders.Facebook,
 			method: AuthMethods.Popup
 		}).then((response)=>{
 			console.log('Login with Facebook success',response);
 			let user = {
 				email:response.auth.email,
 				picture:response.auth.photoURL,
 			}; 	
 			window.localStorage.setItem('user',JSON.stringify(user));
 			//self.navCtrl.pop();
 			self.navCtrl.push(TabsPage);
 		}).catch((error)=>{ 			
 			//console.log(error);
 			if (error !== null || error !== undefined) { //Quiere decir que ya está registrado con otra cuenta
				self.navCtrl.push(TabsPage);
 			}else{
 				alert('Ocurrió un problema con el inicio de sesión');
 			}
 		});
 	}

 	/* Method to login with google plus on event listener from button id */
 	
 	onGooglePlusLogin(e):void{
 		console.log('Logging in with Google Plus');
 		let self = this;
 		this.af.auth.login({
 			provider: AuthProviders.Google,
 			method: AuthMethods.Popup
 		}).then((response)=>{
 			console.log('Login with Google Plus success',response);
 			let user = {
 				email:response.auth.email,
 				picture:response.auth.photoURL,
 			};
 			window.localStorage.setItem('user',JSON.stringify(user));
 			//self.navCtrl.pop();
 			self.navCtrl.push(TabsPage);
 		}).catch((error)=>{
 			//console.log(error);
 			if (error !== null || error !== undefined) { //Quiere decir que ya está registrado con otra cuenta
				self.navCtrl.push(TabsPage);
 			}else{
 				alert('Ocurrió un problema con el inicio de sesión');
 			}
 		});
 	}

 	/* Method to login with github on event listener from button id */
 	
 	onGithubLogin(e):void{
 		console.log('Logging in with Github');
 		let self = this;
 		this.af.auth.login({
 			provider: AuthProviders.Github,
 			method: AuthMethods.Popup
 		}).then((response)=>{
 			console.log('Login with Github success',response);
 			let user = {
 				email:response.auth.email,
 				picture:response.auth.photoURL,
 			};
 			window.localStorage.setItem('user',JSON.stringify(user));
 			self.navCtrl.push(TabsPage); 			
 			//self.navCtrl.pop();
 		}).catch((error)=>{
 			//console.log(error);
 			if (error !== null || error !== undefined) { //Quiere decir que ya está registrado con otra cuenta
				self.navCtrl.push(TabsPage);
 			}else{
 				alert('Ocurrió un problema con el inicio de sesión');
 			}
 		});
 	}

	/* Method to login with tap method */
 	login():void{
 		console.log('Trying login with tap method')
 	}

 	/* Method to login with twitter on tap method */
 	loginWithTwitter(e):void{
 		console.log('Trying login with twitter tap method');
 		this.onTwitterLogin(e);
 	}

 	/* Method to login with facebook on tap method */
 	loginWithFacebook(e):void{
 		console.log('Trying login with facebook tap method');
 		this.onFacebookLogin(e);
 	}

 	/* Method to login with google plus on tap method */
 	loginWithGooglePlus(e):void{
 		console.log('Trying login with google plus tap method');
 		this.onGooglePlusLogin(e);
 	} 	

 	/* Method to login with github on tap method */
 	loginWithGithub(e):void{
 		console.log('Trying login with github plus tap method')
 		this.onGithubLogin(e);
 	} 	 	

 	/* Method to sign in on application */
	signIn():void{
		console.log('Trying sign with tap method')
	}
}

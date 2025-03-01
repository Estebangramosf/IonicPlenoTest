/* Core Imports */
import { Component, ElementRef, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FormBuilder, Validators } from '@angular/forms';
//import * as Firebase from 'firebase';

/* Page Imports */
//import { SignInPage } from './signin';
import { HomePage } from '../home/home';
import { SignupPage } from './signup';
import { ResetPasswordPage } from './reset-password';

/* Component Imports */
import { TabsPage } from '../tabs/tabs';

/* Service Imports */
import { AuthData } from '../../providers/auth-data';
//import { UserService } from '../../services/user.service';

/* Validator Imports */
import { EmailValidator } from '../../validators/email';
	
/* Component declaration */
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

/* Exportable class/component */
export class LoginPage implements OnInit {
	root:any;
	loginForm: any;
	loading: any;
	constructor ( private alertCtrl:	AlertController, public navCtrl: NavController, public authData: AuthData,
		public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public element: ElementRef, 
		public af: AngularFire//,private 	userService: UserService, 
 	){ 		
 		// Initialize var for get elements with selector queries
 		this.element.nativeElement;

 		// Initialize validator for form builder to specificate required fields and required format
		this.loginForm = formBuilder.group({
		   email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
		   password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});

 		/*
		DBService.openDatabase();
		DBService.createTable();
		console.dir(DBService.getAll());
		*/
 	}

 	/* On angular init do: */
 	ngOnInit(){
 		console.log('Arrancó el init de AngularJs');
 		// Initialize object to get elements from html with native js functions/methods
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

 	// Function loginUser with email/user and password
	loginUser(){
		// Validate with angular function if the login form is valid, if not, show message by console to debug
		if (!this.loginForm.valid){
			console.log(this.loginForm.value);
		} else {
			// Else, the format and required fields was ok, so instance login function in authData function with email and pw
			this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
			.then( authData => {
				// If authentification is correct, get response in authData and set rootPage how HomePage
				this.navCtrl.push(TabsPage);
			}, error => {
				// Case that some data was incorrect, show message with error to users in screen
				this.loading.dismiss().then( () => {
					let alert = this.alertCtrl.create({
						message: error.message,
						buttons: [{
							text: "Ok",
							role: 'cancel'
						}]
					});
					alert.present();
				});
			});
			// Shows loading icon and when dismiss page, this was disposed
			this.loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
			});
			this.loading.present();
		}
	}

	// Funciont that show view to reset password
	goToResetPassword(){
		console.log('Reset password');
		this.navCtrl.pop();
	   this.navCtrl.push(ResetPasswordPage);
	}

	// Function that show view to create new account
	createAccount(){
		this.navCtrl.pop();
	   this.navCtrl.push(SignupPage);
	}


 	/* Method to login with event listener from button id */
 	// This is another method to login using native elements, how for example :
 	// Javascript functions to get elements by id, or selectors.
 	//Now this function is deprecated, because was replaced by the first function
 	onClick(e):void{
 		console.log('Button clicked');
 		let self = this;
 		var email:string = self.root.querySelector('#email');
 		var password:string = self.root.querySelector('#password');
 		self.af.auth.login({
 			email: 'esteban.ramos.f@gmail.com',
 			password: 'test1234'
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

 	/*
 		##########################################################
				FUNCTIONS WITH EVENT LISTENER AND SELECTORS
 		##########################################################		
 	*/

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
 			//self.navCtrl.setRoot(TabsPage);
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


 	/*
 		##########################################################
						FUNCTIONS WITH ANGULAR TAP METHODS
 		##########################################################		
 	*/

 	// This functions also call functions with selector, because was be created first and the next methods is 
 	// Only to create another alternatives.

	/* Method to login with tap method */
 	login(e):void{
 		console.log('Trying login with tap method');
 		this.onClick(e);
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

}

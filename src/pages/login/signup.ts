/* Core Imports */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/* Provider Imports */
import { AuthData } from '../../providers/auth-data';

/* Validation Imports */
import { EmailValidator } from '../../validators/email';

/* Page Imports */
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/* Component Declaration */
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})

/* Exportable Class/Component */
export class SignupPage {
	public signupForm;
	loading:any;

	constructor(public navCtrl: NavController, public authData: AuthData, 
		public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController) {

		this.signupForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	signupUser(){
		if (!this.signupForm.valid){
			console.log(this.signupForm.value);
		} else {
			this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
			.then(() => {
				this.navCtrl.setRoot(TabsPage);
			}, (error) => {
				this.loading.dismiss().then( () => {
					var errorMessage: string = error.message;
						let alert = this.alertCtrl.create({
							message: errorMessage,
							buttons: [{
								text: "Ok",
								role: 'cancel'
							}]
						});
					alert.present();
				});
			});

			this.loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
			});
			this.loading.present();
		}
	}
}
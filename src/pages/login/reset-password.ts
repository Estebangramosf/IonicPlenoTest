/* Core Imports  */
import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/* Service Imports */
import { AuthData } from '../../providers/auth-data';

/* Page Imports */
//import { LoginPage } from './login';

/* Validator Imports */
import { EmailValidator } from '../../validators/email';

/* Component Declaration */
@Component({
	selector: 'page-reset-password',
	templateUrl: 'reset-password.html',
})

/* Exportable Class */
export class ResetPasswordPage {
	public resetPasswordForm:any;

	constructor ( public authData: AuthData, public formBuilder: FormBuilder,
		public navCtrl: NavController, public alertCtrl: AlertController ) {

		// Initializing builder for angular form validator in variable
		this.resetPasswordForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
		});
	}

	// Method to reset user password
	resetPassword(){
		// Validate that form is valid, if not, show debug in console
		if (!this.resetPasswordForm.valid){
			console.log(this.resetPasswordForm.value);
		} else {
			// If form is valid, use function resetPassword provide by AuthData component, sending email to reset pw
			this.authData.resetPassword(this.resetPasswordForm.value.email)
			.then((user) => {
				// If success, create alert with message to review email
				let alert = this.alertCtrl.create({
					message: "We just sent you a reset link to your email",
					buttons: [{
						text: "Ok",
						role: 'cancel',
						handler: () => {
							this.navCtrl.pop();
						}
					}]
				});
				alert.present();
			}, (error) => {
				// If error, create alert with message printing error detail
				var errorMessage: string = error.message;
				let errorAlert = this.alertCtrl.create({
					message: errorMessage,
					buttons: [{
						text: "Ok",
						role: 'cancel'
					}]
				});
				errorAlert.present();
			});
		}
	}
}
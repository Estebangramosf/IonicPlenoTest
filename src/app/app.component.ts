/* Core Imports */
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';

/* Replaced core import libs to the next refactor */
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

/* Page Imports */
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

/* Component declaration */
@Component({
	templateUrl: 'app.html'
})

/* Exportable class */
export class MyApp {
	//rootPage:any = TabsPage;
	rootPage:any = LoginPage;

	constructor ( platform: Platform, statusBar: StatusBar, splashScreen: Splashscreen, public af: AngularFire ) {		
		// Validate that user was logged in and redirecto to home, else redirect to login view
		// Make const authObserver and validate if exists active user sesion to change the rootPage
		const authObserver = af.auth.subscribe( user => {
			if (user) {
				// If user sesion is active or exist something, rootPage was HomePage
				this.rootPage = LoginPage;
				authObserver.unsubscribe();
			} else {
				// Else the rootPage was LoginPage to the user can be start new sesion, register or request new password
				this.rootPage = LoginPage;
				authObserver.unsubscribe();
			}
		});

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}
}

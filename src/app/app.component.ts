/* Core Imports */
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

/* Replaced core import libs to the next refactor */
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

/* Page Imports */
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


/* Component declaration */
@Component({
  templateUrl: 'app.html'
})

/* Exportable class */
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, 
    statusBar: StatusBar, splashScreen: Splashscreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

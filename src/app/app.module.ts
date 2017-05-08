/* Core Imports */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

/* Replaced core import libs to the next refactor */
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

/* Page Imports */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

/* Provider Imports */
import { AuthData } from '../providers/auth-data';

/* Config Imports */
import { FIREBASE_CONFIG } from '../configs/firebase.config.ts';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

var links = [
   { component: LoginPage, name:'Login', segment:'login' },
   { component: TabsPage, name:'Tabs', segment:'tabs' },
   //{ component: ShowNotificationPage, name:'notification', segment:'notification/:id' },
];


/* Angular mode to include all dependencies and components to use in the app */
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, links),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, /*myFirebaseAuthConfig*/)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    Splashscreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //AuthData
  ]
})
export class AppModule {}

# IonicPlenoTest
	* Postulation Test

![](http://oi64.tinypic.com/vh6h4m.jpg)

## App Links for login with social networks

	* Twitter : ```https://apps.twitter.com/app/13774356/settings```
	* Facebook : ```https://developers.facebook.com/apps/232305320583190/fb-login/```
	* Google : ```Was integrated internally in google firebase```
	* Github : ```https://github.com/settings/applications/525898```

## Setup
	* First you need must be installed npm to install Ionic and Cordova
	* Next, you need clone or download the repository of project
	* Next, you need enter in project folder and install the dependencies of project
	* Optionally, to test in emulated devices, you need add all platforms into the project dependencies
	* Finally go to test

## Steps

### 1 - Installing Ionic and Cordova via `npm`
	* In you project folders, open a new terminal and execute these commands

		* ``sudo npm install -g ionic``
		* ``sudo npm install -g cordova``


### 2 - Clonning repository
	* In local machine, in folder of ionic projects, clone Project Test respository from next link :

#### using `HTTPS`
	* ```git clone https://github.com/Estebangramosf/IonicPlenoTest.git```

#### using `SSH`
	* ```git clone git@github.com:Estebangramosf/IonicPlenoTest.git```


### 3 - Installing dependencies
	* Now you must be enter in cloned project, in terminal, execute the next commands

			* `` $ cd IonicPlenoTest ``
			* `` $ sudo npm install --save ``


### 4 - (Optionally) Add platform how Android, IOs
	* Now if you want to test the app in emulated platform how android or ios, you must be need add each platform with the next commands

			* `` $ ionic add platform android ``
			* `` $ ionic add platform ios ``		

### 5 - Run server
	* Finally to run the server and show the app in browser, only execute in the terminal (on project folder) the next command

			* `` $ ionic serve -l ``

#### Or also with specific direction and port

			* `` $ ionic serve --address localhost  --port 8101 -l  ``

#### To run the app in emulated platform, execute the next commands (Required have installed android device manager with 1 emulator active, also to ios)
	* For android

			* `` $ ionic emulate android ``

	* For ios
	
			* `` $ ionic emulate ios ``



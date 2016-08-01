import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBqJDTrkxyE5St5Im4Z32haKQFnz8ITomg",
    authDomain: "super-gary.firebaseapp.com",
    databaseURL: "https://super-gary.firebaseio.com",
    storageBucket: "super-gary.appspot.com",
  })
]);


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//   setTimeout(() => 
// { 


function removePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.remove();
  }
}

setTimeout(() => {
  removePreloader();
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
}, 3000);
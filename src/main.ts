import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//   setTimeout(() => 
// { 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// function removePreloader() {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     preloader.remove();
//   }
// }

// setTimeout(() => {
//   removePreloader();
//   bootstrapApplication(AppComponent, appConfig)
//     .catch(err => console.error(err));
// }, 3000);
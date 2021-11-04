import { Component } from '@angular/core';

import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-fb-login-poc';
  ngOnInit(event: any) {

    Hub.listen('auth', (data) => {
      console.log(data);
      const { payload } = data;
      // this.onAuthEvent(payload);           
      console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
  })

  }
}

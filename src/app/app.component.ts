import { Component } from '@angular/core';
import { AppSettings } from './shared/app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';
  
  public ngOnInit(){
    this.title = AppSettings.APPLICATION_TITLE; 
  }

}

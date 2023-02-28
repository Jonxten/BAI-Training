import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AngularEmojisModule } from 'angular-emojis';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { UiTaskOneComponent } from './ui-tasks/ui-task-1/ui-task-one.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTaskTwoComponent } from './ui-tasks/ui-task-2/ui-task-two.component';
import { UiTaskThreeComponent } from './ui-tasks/ui-task-3/ui-task-three.component';

@NgModule({
  declarations: [
    AppComponent,
    UiTaskOneComponent,
    UiTaskTwoComponent,
    UiTaskThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    AngularEmojisModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

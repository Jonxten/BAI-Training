import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { UiTaskOneComponent } from './ui-task-1/ui-task-one/ui-task-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTaskTwoComponent } from './ui-task-1/ui-task-two/ui-task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    UiTaskOneComponent,
    UiTaskTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

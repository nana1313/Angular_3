import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { HighlightDirective } from './third/highlight.directive';
import { FourthComponent } from './fourth/fourth.component';
// import { HiglightWithRadioComponent } from './higlight-with-radio/higlight-with-radio.component';
// import { HighlithtWithRadioDirective } from './higlight-with-radio/highlitht-with-radio.directive';
// import { HighlightWithRadioTwoComponent } from './highlight-with-radio-two/highlight-with-radio-two.component';
// import { HighlightWithRadiosTwoDirective } from './highlight-with-radio-two/highlight-with-radios-two.directive';
// import { NgIfExerciseComponent } from './ng-if-exercise/ng-if-exercise.component';
@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent, HighlightDirective, FourthComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentComponent } from './student/student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, StudentAddComponent, StudentDisplayComponent, StudentComponent, StudentEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

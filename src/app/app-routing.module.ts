import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";
import { StudentDisplayComponent } from "./student-display/student-display.component";

const routes: Routes = [
  {
    path: "student",
    component: StudentComponent,
    children: [
      {
        path: "",
        component: StudentDisplayComponent
      },
      {
        path: "add",
        component: StudentAddComponent
      },
      {
        path: "edit",
        component: StudentEditComponent
      }
    ]
  }
  // {
  //   path: "book",
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

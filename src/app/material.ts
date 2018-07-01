import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule,MatDividerModule, MatButtonToggleModule } from '@angular/material';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule, MatDividerModule, MatButtonToggleModule],
  exports: [  MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule,MatDividerModule, MatButtonToggleModule],

})

export class  MaterialModule {

}

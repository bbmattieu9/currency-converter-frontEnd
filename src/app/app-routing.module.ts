import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ConverterComponent } from './converter/converter.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [

    {
      path: '',
      component: ConverterComponent
    },

    {
      path: 'profile',
      component: ProfileComponent
    },

    {
      path: 'documentation',
      component: DocumentationComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

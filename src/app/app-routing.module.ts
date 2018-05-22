import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RegisterVehicleComponent } from './register-vehicle/register-vehicle.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/RegisterVehicleComponent', pathMatch: 'full' },
  { path: 'RegisterVehicleComponent', component: RegisterVehicleComponent }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

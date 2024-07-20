import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';
import { CivilComponent } from './services/civil/civil.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'civil', component: CivilComponent },
  { path: '', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ServicesComponent, CivilComponent],
})
export class ServicesModule {}

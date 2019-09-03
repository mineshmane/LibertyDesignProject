import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BulletsComponent } from './bullets/bullets.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chart', component: ChartsComponent },
  { path: 'line', component: LineChartComponent },
  {path:'toolbar',component:ToolbarComponent},
  {path:'bullet',component:BulletsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

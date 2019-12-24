import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts'
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SplinechartComponent } from './splinechart/splinechart.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BulletsComponent } from './bullets/bullets.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    LineChartComponent,HighchartsChartComponent, SplinechartComponent, ToolbarComponent, BulletsComponent, HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,BrowserAnimationsModule,NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-splinechart',
  templateUrl: './splinechart.component.html',
  styleUrls: ['./splinechart.component.scss']
})
export class SplinechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: "spline"
     },
     credits: {
      enabled: false
    },
    title: {
      //  text: "Average Product support"
      enabled: false
    },
    // subtitle: {
    //    text: "Source: WorldClimate.com"
    // },
    xAxis: {
      categories: ["2016", "2017", "2018",
        "2019",],
      // enabled:false   
    },
    yAxis: {
      title: {
        // text:"Temperature °C"
        enabled: false
      }
    },
    tooltip: {
      valueSuffix: " " 
    },
    plotOptions : {
      area: {
         fillOpacity: 0.5 
      }
   },
    series: [
      {
        name: 'onlineSale',
        data: [7.0, 6.9, 7.5,  26.5,]
      },
      {
        name: 'Store sale',
        data: [10.5,  22.0, 1.8, 24.1,]
      },

    ]
  };
}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "areaspline"
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
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018",
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
        name: 'product',
        data: [7.0, 6.9, 7.5, 14.5, 18.2, 15.5, 25.2, 26.5,]
      },
      {
        name: 'support',
        data: [10.5, 0.8, 0.7, 11.3, 17.0, 22.0, 1.8, 24.1,]
      },

    ]
  };






}

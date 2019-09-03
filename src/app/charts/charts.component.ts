import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  // width: 493px;
  // height: 164px;
  view: any[] = [493, 164];

  // options for the chart
  showXAxis = true;
  // showYAxis = true;
  gradient = false;
  // showLegend = true;
  showXAxisLabel = true;
  // xAxisLabel = 'Country';
  showYAxisLabel = true;
  // yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;

  // data goes here
  public single = [
    {
      "name": "mon",
      "value": 2243772
    },
    {
      "name": "Tues",
      "value": 1126000
    },
    {
      "name": "Wed",
      "value": 296215
    },
    {
      "name": "Thus",
      "value": 257363
    },
    {
      "name": "Fri",
      "value": 196750
    },
    {
      "name": "Sat",
      "value": 4004617
    },
    {
      "name": "Sun",
      "value": 204617
    }
  ];

 


  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: 'column'
     },
     credits: {
      enabled: false
    },
     title: {
        // text: 'Monthly Average Rainfall',
        enabled:false
     },
    //  subtitle:{
    //     text: 'Source: WorldClimate.com' 
    //  },
     xAxis:{
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        // crosshair: true        
     },     
    //  yAxis : {
    //   enabled: false,
    //     // min: 0,
    //     // title: {
    //     //    text: 'Rainfall (mm)'         
    //     // }      
    //  },
    //  tooltip : {
    //     // headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
    //     pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
    //        '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', 
    //        shared: true, useHTML: true
    //  },
     plotOptions : {
        column: {
           pointPadding: 0.2,
           borderWidth: 0
        }
     },
     series: [
       {
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
     }, 
    //  {
    //     name: 'New York',
    //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
    //        91.2, 83.5, 106.6, 92.3]
    //  }, 
  
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

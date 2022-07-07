<template>
  <v-container class="chart-field-wrapper">
    <div class="chart-field" ref="chartdiv"></div>
  </v-container>
</template>

<script>

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
    name: 'Chart',

    mounted() {
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        chart.paddingRight = 20;

        let data = [
            {"date":'2020-07-01',"visits":213},
            {"date":"2020-07-02","visits":249},
            {"date":"2020-07-03","visits":179},
            {"date":"2020-07-04","visits":170},
            {"date":"2020-07-05","visits":184},
            {"date":"2020-07-06","visits":202},
            {"date":"2020-07-07","visits":198},
            {"date":"2020-07-08","visits":168},
            {"date":"2020-07-09","visits":176},
            {"date":"2020-07-10","visits":171},
            {"date":"2020-07-11","visits":190},
            {"date":"2020-07-12","visits":154},
            {"date":"2020-07-13","visits":246},
            {"date":"2020-07-14","visits":250},
            {"date":"2020-07-15","visits":227},
            {"date":"2020-07-16","visits":140},
            {"date":"2020-07-17","visits":170},
            {"date":"2020-07-18","visits":125},
            {"date":"2020-07-19","visits":106},
            {"date":"2020-07-20","visits":207},
            {"date":"2020-07-21","visits":222},
            {"date":"2020-07-22","visits":198},
            {"date":"2020-07-23","visits":204},
            {"date":"2020-07-24","visits":213},
            {"date":"2020-07-25","visits":145},
            {"date":"2020-07-26","visits":166},
            {"date":"2020-07-27","visits":163},
            {"date":"2020-07-28","visits":135},
            {"date":"2020-07-29","visits":45}
        ];


        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 35;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'visits';
        series.dataFields.dateX = "date";
        series.name = 'Визиты';
        series.tooltipText = "{dateX}: [b]{valueY}[/]";
        series.strokeWidth = 2;
        series.fill = am4core.color("#1976D2");
        series.smoothing = "monotoneX";
        
        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = am4core.color("#fff");
        bullet.circle.strokeWidth = 2;
            

        chart.legend = new am4charts.Legend();

        let title = chart.titles.create();
        title.text = "Аналитика по визитам";
        title.fontSize = 25;

        chart.cursor = new am4charts.XYCursor();
    },
}
</script>

<style lang="less">
    .chart-field {
        height: 350px;
    }
    
    .chart-field-wrapper {
        max-width: 800px;
        margin-top: -20px!important;
    }
</style>
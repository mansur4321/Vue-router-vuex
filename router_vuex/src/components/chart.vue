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
        this.$store.commit('storageSetData');
        chart.paddingRight = 20;
        console.log(this.$store.getters.data);
        let data = this.$store.getters.data;


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
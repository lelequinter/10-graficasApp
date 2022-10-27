import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() labels: string[] = [];
  @Input() chartData!: any;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.labels,
    datasets: this.chartData,
    // [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED0E0C' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#E000D9' },
    //   { data: [38, 28, 60, 39, 96, 47, 50], label: 'Series C', backgroundColor: '#760CED' }
    // ]
  };

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions = {
        indexAxis: 'y'
      }
    }

    this.barChartData = {
      labels: this.labels,
      datasets: this.chartData,
      // [
      //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED0E0C' },
      //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#E000D9' },
      //   { data: [38, 28, 60, 39, 96, 47, 50], label: 'Series C', backgroundColor: '#760CED' }
      // ]
    };

  }

}

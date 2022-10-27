import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  colors: Color[] = ['#F7AC20','#7C0AF5','#F7208E']

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: this.colors },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';




}

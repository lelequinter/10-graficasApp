import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  colors: Color[] = ['#F7AC20', '#7C0AF5', '#F7208E']
  datasets: any[] = []

  // Doughnut
  public doughnutChartLabels: string[] = ['22','22','23'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.datasets, backgroundColor: this.colors },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficaSvc: GraficasService) { }

  ngOnInit(): void {
    this.graficaSvc.getUsersRedesSociales().subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.doughnutChartLabels = labels;
      this.datasets = values;
      // Set data in doughnutChartData
      this.doughnutChartData= {
        labels: this.doughnutChartLabels,
        datasets: [
          { data: this.datasets, backgroundColor: this.colors },
        ]
      };
    });
  }

}

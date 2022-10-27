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
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.datasets, backgroundColor: this.colors },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficaSvc: GraficasService) { }

  ngOnInit(): void {
    this.graficaSvc.getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.datasets = values;
        this.doughnutChartData = {
          labels: labels,
          datasets: [
            { data: values, backgroundColor: this.colors },
          ]
        };
      });
  }

}

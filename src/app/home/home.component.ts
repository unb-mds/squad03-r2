import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

import { KnobModule } from 'primeng/knob';

import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  value: number = 30;



  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            data: [85, 72, 39, 81, 40, 86, 94],
            borderColor: '#A99CB8',
          },
          {
            data: [33, 38, 56, 45, 68, 50, 35],
            borderColor: '#533A71',

          }
        ]
      },

      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Número de Licitações',
          },
        },
      }
    });
  }
}
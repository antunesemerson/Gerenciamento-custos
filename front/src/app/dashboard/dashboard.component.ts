import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  credito = 0;
  custo = 0;
  total = 0;
  items: CustosItem[];
  public descricao: Array<any> = [];

  public chartType = 'bar';
  public chartDatasets: Array<any> = [
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'My First dataset' },
    { data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], label: 'My Second dataset' }
  ];
  public chartLabels: Array<any> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)',
        'rgba(235,40,40,1)'
      ],
      borderWidth: 0,
    },
    {
      backgroundColor: [
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)',
        'rgba(9,163,9, 1)'
      ],
      borderWidth: 0,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };

  janCusto = 0;
  janCredito = 0;
  janDateInicio: string = new Date('2020-01-02').toISOString();
  janDateFim: string = new Date('2020-01-30').toISOString();

  fevCusto = 0;
  fevCredito = 0;
  fevDateInicio: string = new Date('2020-02-02').toISOString();
  fevDateFim: string = new Date('2020-02-28').toISOString();

  marCusto = 0;
  marCredito = 0;
  marDateInicio: string = new Date('2020-03-02').toISOString();
  marDateFim: string = new Date('2020-03-30').toISOString();

  abrCusto = 0;
  abrCredito = 0;
  abrDateInicio: string = new Date('2020-04-02').toISOString();
  abrDateFim: string = new Date('2020-04-29').toISOString();

  maiCusto = 0;
  maiCredito = 0;
  maiDateInicio: string = new Date('2020-05-02').toISOString();
  maiDateFim: string = new Date('2020-05-30').toISOString();

  junCusto = 0;
  junCredito = 0;
  junDateInicio: string = new Date('2020-06-02').toISOString();
  junDateFim: string = new Date('2020-06-29').toISOString();

  julCusto = 0;
  julCredito = 0;
  julDateInicio: string = new Date('2020-07-02').toISOString();
  julDateFim: string = new Date('2020-07-30').toISOString();

  agoCusto = 0;
  agoCredito = 0;
  agoDateInicio: string = new Date('2020-08-02').toISOString();
  agoDateFim: string = new Date('2020-08-30').toISOString();

  setCusto = 0;
  setCredito = 0;
  setDateInicio: string = new Date('2020-09-02').toISOString();
  setDateFim: string = new Date('2020-09-29').toISOString();

  outCusto = 0;
  outCredito = 0;
  outDateInicio: string = new Date('2020-10-02').toISOString();
  outDateFim: string = new Date('2020-10-30').toISOString();

  novCusto = 0;
  novCredito = 0;
  novDateInicio: string = new Date('2020-11-02').toISOString();
  novDateFim: string = new Date('2020-11-29').toISOString();

  dezCusto = 0;
  dezCredito = 0;
  dezDateInicio: string = new Date('2020-12-02').toISOString();
  dezDateFim: string = new Date('2020-12-30').toISOString();

  hojeDate: string = new Date().toISOString();

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.api.getAllCustos().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          this.descricao[i] = data[i].descricao;
        }
        //this.chartLabels = this.descricao;
        for (let i = 0; i < data.length; i++) {
          //this.chartDatasets[0].data[i] = data[i].valor;
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.length; i++) {
          if (!data[i].credito) {
            if (data[i].inicio <= this.hojeDate && data[i].fim >= this.hojeDate) {
              this.custo = this.custo + data[i].valor;
            }
          } else {
            if (data[i].inicio <= this.hojeDate && data[i].fim >= this.hojeDate) {
              this.credito = this.credito + data[i].valor;
            }
          }
          this.total = this.credito - this.custo;
        }

        this.items = data;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.items.length; i++) {
          if (!this.items[i].credito) {
            if (this.items[i].inicio <= this.janDateInicio && this.items[i].fim >= this.janDateFim) {
              this.janCusto = this.janCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.fevDateInicio && this.items[i].fim >= this.fevDateFim) {
              this.fevCusto = this.fevCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.marDateInicio && this.items[i].fim >= this.marDateFim) {
              this.marCusto = this.marCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.abrDateInicio && this.items[i].fim >= this.abrDateFim) {
              this.abrCusto = this.abrCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.maiDateInicio && this.items[i].fim >= this.maiDateFim) {
              this.maiCusto = this.maiCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.junDateInicio && this.items[i].fim >= this.junDateFim) {
              this.junCusto = this.junCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.julDateInicio && this.items[i].fim >= this.julDateFim) {
              this.julCusto = this.julCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.agoDateInicio && this.items[i].fim >= this.agoDateFim) {
              this.agoCusto = this.agoCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.setDateInicio && this.items[i].fim >= this.setDateFim) {
              this.setCusto = this.setCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.outDateInicio && this.items[i].fim >= this.outDateFim) {
              this.outCusto = this.outCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.novDateInicio && this.items[i].fim >= this.novDateFim) {
              this.novCusto = this.novCusto + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.dezDateInicio && this.items[i].fim >= this.dezDateFim) {
              this.dezCusto = this.dezCusto + this.items[i].valor;
            }
          } else {
            if (this.items[i].inicio <= this.janDateInicio && this.items[i].fim >= this.janDateFim) {
              this.janCredito = this.janCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.fevDateInicio && this.items[i].fim >= this.fevDateFim) {
              this.fevCredito = this.fevCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.marDateInicio && this.items[i].fim >= this.marDateFim) {
              this.marCredito = this.marCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.abrDateInicio && this.items[i].fim >= this.abrDateFim) {
              this.abrCredito = this.abrCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.maiDateInicio && this.items[i].fim >= this.maiDateFim) {
              this.maiCredito = this.maiCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.junDateInicio && this.items[i].fim >= this.junDateFim) {
              this.junCredito = this.junCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.julDateInicio && this.items[i].fim >= this.julDateFim) {
              this.julCredito = this.julCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.agoDateInicio && this.items[i].fim >= this.agoDateFim) {
              this.agoCredito = this.agoCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.setDateInicio && this.items[i].fim >= this.setDateFim) {
              this.setCredito = this.setCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.outDateInicio && this.items[i].fim >= this.outDateFim) {
              this.outCredito = this.outCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.novDateInicio && this.items[i].fim >= this.novDateFim) {
              this.novCredito = this.novCredito + this.items[i].valor;
            }
            if (this.items[i].inicio <= this.dezDateInicio && this.items[i].fim >= this.dezDateFim) {
              this.dezCredito = this.dezCredito + this.items[i].valor;
            }
          }
        }
        this.chartDatasets = [
          // tslint:disable-next-line: max-line-length
          { data: [this.janCusto, this.fevCusto, this.marCusto, this.abrCusto, this.maiCusto, this.junCusto, this.julCusto, this.agoCusto, this.setCusto, this.outCusto, this.novCusto, this.dezCusto], label: 'Custo' },
          // tslint:disable-next-line: max-line-length
          { data: [this.janCredito, this.fevCredito, this.marCredito, this.abrCredito, this.maiCredito, this.junCredito, this.julCredito, this.agoCredito, this.setCredito, this.outCredito, this.novCredito, this.dezCredito], label: 'Credito' }
        ];
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  custos() {
    this.router.navigate(['custos']);
  }
}

export interface CustosItem {
  id: number;
  descricao: string;
  valor: number;
  inicio: string;
  fim: string;
  credito: boolean;
}

type MyArrayType = Array<{
  id: number;
  descricao: string;
  valor: number;
  inicio: Date;
  fim: Date;
  credito: boolean;
}>;

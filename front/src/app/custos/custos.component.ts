import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CustosItem } from './custos-item.interface';

@Component({
  selector: 'app-custos',
  templateUrl: './custos.component.html',
  styleUrls: ['./custos.component.scss']
})
export class CustosComponent implements OnInit {

  items: CustosItem[];
  error: any;
  order = 'ds_custo';
  credito = 0;
  custo = 0;
  total = 0;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.api.getAllCustos().subscribe(
      (items: CustosItem[]) => {
        this.items = items;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.items.length; i++) {
          if (!this.items[i].credito) {
            this.custo = this.custo + this.items[i].valor;
          } else {
            this.credito = this.credito + this.items[i].valor;
          }
          this.total = this.credito - this.custo;
        }
      },
      (error: any) => this.error = error
    );
  }

  editClicked = (custo) => {
    this.router.navigate(['custos/custo-edit', custo.id]);
  }

  deleteClicked = (custo) => {
    this.router.navigate(['custos/custo-delete', custo.id]);
  }

  newCusto() {
    this.router.navigate(['custos/custo-new']);
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

}

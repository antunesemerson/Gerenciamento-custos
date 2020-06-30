import { ApiService } from '../../api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custo-delete',
  templateUrl: './custo-delete.component.html',
  styleUrls: ['./custo-delete.component.scss']
})
export class CustoDeleteComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private router: Router,
  ) { }

  selected_custo = {descricao: '', valor: '', credito: ''};
  selected_cd_custo;

  ngOnInit() {
    this.rout.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_cd_custo = id;
      this.loadCusto(id);
    });
  }

  loadCusto(id) {
    this.api.getCusto(id).subscribe(
      data => {
        this.selected_custo = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  delete() {
    this.api.deleteCusto(this.selected_cd_custo).subscribe(
      data => {
        this.router.navigate(['custos']);
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  cancelClicked = () => {
    this.router.navigate(['custos']);
  }

}

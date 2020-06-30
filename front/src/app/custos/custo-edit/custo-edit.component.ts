import { ApiService } from '../../api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custo-edit',
  templateUrl: './custo-edit.component.html',
  styleUrls: ['./custo-edit.component.scss']
})
export class CustoEditComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  submitted = false;
  registerForm: FormGroup;
  selected_cd_custo;
  selected_custo = {descricao: '', valor: null, inicio: '', fim: '', credito: null};
  booleano = [
    {label: 'Crédito', value: true},
    {label: 'Custo', value: false}
  ];
  descricao;
  valor;
  inicio;
  fim;
  tipo;

  ngOnInit() {
    this.rout.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_cd_custo = id;
      this.loadCusto(id);
    });

    this.registerForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      inicio: ['', Validators.required],
      fim: ['', Validators.required],
      tipo: ['', ],
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

  update() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Formulário inválido');
      return;
    }
    this.api.editCusto(this.selected_custo).subscribe(
      data => {
        this.selected_custo = data;
        this.router.navigate(['custos']);
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  cancelClicked = () => {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(['custos']);
  }

  get f() { return this.registerForm.controls; }

}

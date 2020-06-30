import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custo-new',
  templateUrl: './custo-new.component.html',
  styleUrls: ['./custo-new.component.scss']
})
export class CustoNewComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  submitted = false;
  registerForm: FormGroup;
  custo = {descricao: '', valor: null, inicio: '', fim: '', credito: null};
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
    this.registerForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      inicio: ['', Validators.required],
      fim: ['', Validators.required],
      tipo: ['', ],
    });
  }

  save() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Formulário inválido');
      return;
    }
    this.api.saveNewCusto(this.custo).subscribe(
      data => {
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

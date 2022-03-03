import { FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

/*   miFormulario: FormGroup = new FormGroup({
    nombre     : new FormControl('RTX 4080ti'),
    precio     : new FormControl(1500),
    existencias: new FormControl(5)
  }) */

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],//Validadores sincronos (arreglo)
    precio: [ , [Validators.required, Validators.min(1)] ],
    existencias: [ , [Validators.required, Validators.min(1)] ]
  })
  
  /* Form Builder es un servicio y hay que injectar ese servicio en el contructor */
  constructor(private fb: FormBuilder) { }


  nombreValido( campo: string ) {
  return this.miFormulario.controls[campo].errors &&
         this.miFormulario.controls[campo].touched;
  }

  

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;      
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  

}

import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Brawl Stars', Validators.required],
      ['Call Of Duty Mobile', Validators.required],
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required );

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }


  validarNombre() {
    return this.miFormulario.controls['nombre'].errors && 
           this.miFormulario.controls['nombre'].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required) );
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();
  }

  borrar( i: number ){
    this.favoritosArr.removeAt(i);

  }


  constructor(private fb: FormBuilder) { }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
      
    }
    console.log(this.miFormulario.value);
    
  }

}

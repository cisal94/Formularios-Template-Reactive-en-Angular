import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: '',
    favoritos: []
  }



  @ViewChild('miFormulario') miFormulario!: NgForm;

  nombreValid(){
    return this.miFormulario?.controls['nombre']?.touched &&
           this.miFormulario?.controls['nombre']?.errors;
  }


  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito} );
  }

  guardar() {
    alert('Datos enviados');
    this.miFormulario.resetForm();
  }

}

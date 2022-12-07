import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Turno } from '../models/turno';

@Component({
  selector: 'app-pagina-turnos',
  templateUrl: './pagina-turnos.component.html',
  styleUrls: ['./pagina-turnos.component.css']
})
export class PaginaTurnosComponent implements OnInit {
   nombreControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
   apellidoControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
   disciplinaControl = new FormControl("", [Validators.required]);
   fechaTurnoControl = new FormControl("", [Validators.required]);
   horaTurnoControl = new FormControl("", [Validators.required]);

   disciplinas: any = ['Padel','Futbol 5','Futbol 7','Tenis'];
   horas: any = ['10:00','11:30','13:00','14:30','16:00','17:30','19:00','20:30'];

   turnosForm = new FormGroup({
    nombreControl: this.nombreControl,
    apellidoControl: this.apellidoControl,
    disciplinaControl: this.disciplinaControl,
    fechaTurnoControl: this.fechaTurnoControl,
    horaTurnoControl: this.horaTurnoControl
   });

   turnosReservados =  new Array();

  constructor() { }

  ngOnInit(): void {
  }

  reservaValida() {
    return (this.turnosForm.get('nombreControl')?.valid && 
    this.turnosForm.get('apellidoControl')?.valid && 
    this.turnosForm.get('disciplinaControl')?.valid && 
    this.turnosForm.get('fechaTurnoControl')?.valid && 
    this.turnosForm.get('horaTurnoControl')?.valid)
  }

  reservarTurno() {
    this.turnosReservados.push(
      new Turno(
        this.turnosForm.get('nombreControl')?.value!, 
        this.turnosForm.get('apellidoControl')?.value!, 
        this.turnosForm.get('disciplinaControl')?.value!, 
        this.turnosForm.get('fechaTurnoControl')?.value!,
        this.turnosForm.get('horaTurnoControl')?.value!
      )
    )
  }

}

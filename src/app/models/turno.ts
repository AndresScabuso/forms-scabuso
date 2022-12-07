import { Time } from "@angular/common";

export class Turno {
    nombre: string;
    apellido: string;
    disciplina: string;
    fecha: string;
    hora: string;

    constructor(
        nombre: string, 
        apellido: string, 
        disciplina: string,
        fecha: string,
        hora: string) 
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.disciplina = disciplina;
        this.fecha = fecha;
        this.hora = hora;
    }
}
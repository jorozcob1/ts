//Definir la clase Task
export class Tarea{
    //Propiedades
    descripcion: string;
    completado: boolean;

    //Constructor de la clase tarea
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }
    
    //Método para marcar la tarea como completada
    tareaCompletada(){
    //cambiar el estado a true
    this.completado = !this.completado;
    }
}


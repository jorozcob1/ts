//Definir la clase Task
var Tarea = /** @class */ (function () {
    //Constructor de la clase tarea
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Método para marcar la tarea como completada
    Tarea.prototype.tareaCompletada = function () {
        //cambiar el estado a true
        this.completado = !this.completado;
    };
    return Tarea;
}());
export { Tarea };

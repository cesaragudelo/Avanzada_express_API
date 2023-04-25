import { ServicioHabitacion } from "../services/servicioHabitacion.js"

export class ControladorHabitaciones{
    constructor(){}
   async registrandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion=new ServicioHabitacion()

        try{
            let datosHabitacion=peticion.body
            await objetoservicioHabitacion.registrar(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
    async buscandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion=new ServicioHabitacion()
        try{
            let idHabitacion=peticion.params.idhabitacion
            respuesta.status(200).json({
                "mensaje":"exito buscando habitacion",
                "habitacion":await objetoservicioHabitacion.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos buscando habitacion"+error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let onbjetoservicioHabitacion=new ServicioHabitacion()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando habitaciones",
                "habitacion":await onbjetoservicioHabitacion.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos buscando habitaciones"+error
            })
        }
    }
   async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body

        let onbjetoservicioHabitacion=new ServicioHabitacion()
        
        try{
            await onbjetoservicioHabitacion.editar(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito editando habitacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos editando habitacion"+error
            })
        }
    }

}
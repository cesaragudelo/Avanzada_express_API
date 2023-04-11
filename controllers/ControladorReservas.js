export class ControladorReservas{
    constructor(){}
    registrandoReservacion(peticion,respuesta){
        try{
            let datosReservacion=peticion.body
            console.log(datosReservacion)
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
    buscandoReservacion(peticion,respuesta){
        try{
            let idReserva=peticion.params.idreserva
            console.log(idReserva)
            respuesta.status(200).json({
                "mensaje":"exito buscando reservacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos buscando habitacion"+error
            })
        }
    }
    buscandoReservaciones(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando reservaciones",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos buscando reservaciones"+error
            })
        }
    }
    editandoReservacion(peticion,respuesta){
        let idReserva=peticion.params.idreserva
        let datosReserva=peticion.body
        console.log(idReserva)
        console.log(datosReserva)
        try{
            respuesta.status(200).json({
                "mensaje":"exito editando reservacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos editando reservacion"+error
            })
        }
    }

    eliminandoReservacion(peticion,respuesta){
        let idReserva=peticion.params.idreserva
        let datosReserva=peticion.body
        console.log(idReserva)
        console.log(datosReserva)
        try{
            respuesta.status(200).json({
                "mensaje":"exito editando reservacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos editando reservacion"+error
            })
        }
    }
}
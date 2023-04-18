import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Reserva= new Schema({
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFin:{
        type:Date,
        required:true
    },
    numeropersonas:{
        type:Number,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    },
    idPersona:{
        type:String,
        required:true
    },
    numeroNiños:{
        type:Number,
        required:true
    },
    numeroAdultos:{
        type:Number,
        required:true
    }

})

export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)
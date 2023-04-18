import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion=new ControladorHabitaciones()
let controladorReservacion=new ControladorReservas()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE  CADA SERVICIO DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)

rutas.get('/buscarreservas',controladorReservacion.buscandoReservaciones)
rutas.get('/buscarreserva/:idreserva',controladorReservacion.buscandoReservacion)
rutas.post('/registrarreservacion',controladorReservacion.registrandoReservacion)
rutas.put('/editarreservacion/:idreserva',controladorReservacion.editandoReservacion)
rutas.delete('/eliminarreservacion/:idreserva',controladorReservacion.eliminandoReservacion)

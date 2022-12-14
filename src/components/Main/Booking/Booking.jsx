import React from "react";

const Booking = () => {
  const showResults = (e) => {
    e.preventDefault();
    console.log("event ", e);
    console.log("event zona ", e.target.zone.value, e.target.date.value);
    alert("Su reserva ha sido recibida\n"
      + "Datos de la reserva:"
      + "\nNombre: "
      + e.target.firstName.value
      + "\nFecha: "
      + e.target.date.value
      + "\nHora: "
      + e.target.time.value
      + "\nZona: "
      + e.target.zone.value);
  }
  return (
    <div className="Reserva">

      <div >
        <h1>Reserva</h1>
        <form className="Form_reserva" onSubmit={showResults}>
          {/* <label className="Ttulo" htmlFor="firstName">Nombre</label> */}
          {/* Nombre */}
          <input
            required
            className="input-sin-desplegar2"
            id="firstName"
            name="firstName"
            placeholder="Insertar Nombre"
          />
          {/* fecha */}
          <select required className="input-sin-desplegar" name="date" id="date">
            <option value="">Escoger fecha</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
            <option value="Domingo">Domingo</option>
          </select>
          {/* Hora */}
          <select required className="input-sin-desplegar" name="time" id="time">
            <option value="">Hora</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>23:00</option>
            <option>00:00</option>
          </select>
          {/* Zona */}
          <select required className="input-sin-desplegar" name="zone" id="zone" placeholder="Zona">
            <option value="">Zona</option>
            <option value="VIP">VIP</option>
            <option value="Palco">Palco</option>
            <option value="Terraza">Terraza</option>
            <option value="Zona A">Zona A</option>
            <option value="Zona B">Zona B</option>
            <option value="Zona C">Zona C</option>
          </select>
          {/* Email
<input className="input-sin-desplegar"
             id="email"
            name="email"
            placeholder="usuario@gmail.com"
            type="email"
          />*/}

          <button className="Main-Button-Original" type="submit">Mandar reserva</button>

        </form>
      </div>
    </div>
  )
};


export default Booking;

import { ProxyState } from "../AppState.js"
import { reservationsService } from "../Services/ReservationsService.js";

// FIXME figure out how to draw using the id functionality
function _draw() {
  let template = ``
  ProxyState.reservations.forEach(r => template += r.Template)
  // console.log(template);
  document.getElementById(`${id}`).innerHTML = template
}


export class ReservationsController {
  constructor() {
    console.log("hello from reservation controller");
    // _draw()
  }

  addReservation(id) {
    let form = window.event.target
    window.event.preventDefault()
    // console.log(form.name.value, form.confirmationNumber.value);
    reservationsService.addReservation(form, id)
    console.log(id);
  }
}
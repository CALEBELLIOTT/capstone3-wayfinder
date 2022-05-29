import { ProxyState } from "../AppState.js"
import { reservationsService } from "../Services/ReservationsService.js";
import { saveState } from "../Utils/LocalStorage.js";





export class ReservationsController {
  constructor() {
    console.log("hello from reservation controller");
    ProxyState.on('reservations', saveState)
  }

  addReservation(id) {
    let form = window.event.target
    window.event.preventDefault()
    // console.log(form.name.value, form.confirmationNumber.value);
    reservationsService.addReservation(form, id)
    console.log(id);
    console.log(ProxyState.trips);
    console.log(ProxyState.reservations);
  }

  deleteReservation(id) {
    reservationsService.deleteReservation(id)
  }
}
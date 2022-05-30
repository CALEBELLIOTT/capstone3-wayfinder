import { ProxyState } from "../AppState.js"
import { reservationsService } from "../Services/ReservationsService.js";
import { saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";





export class ReservationsController {
  constructor() {
    ProxyState.on('reservations', saveState)
  }

  addReservation(id) {
    let form = window.event.target
    window.event.preventDefault()
    // console.log(form.name.value, form.confirmationNumber.value);
    reservationsService.addReservation(form, id)
    document.getElementById()
  }

  async deleteReservation(id) {
    if (await Pop.confirm("Are you sure you want to delete this reservation?") == true) {
      reservationsService.deleteReservation(id)
    }
  }
}
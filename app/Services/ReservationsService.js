import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"


class ReservationsService {
  deleteReservation(id) {
    console.log(id);
    let newReservations = ProxyState.reservations.filter(r => r.id != id)
    ProxyState.reservations = newReservations
  }
  addReservation(form, id) {
    let formData = { type: form.type.value, name: form.name.value, confirmationNumber: form.confirmationNumber.value, address: form.address.value, date: form.date.value, cost: form.cost.value, tripId: id }
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(formData)]
  }

}

export const reservationsService = new ReservationsService()
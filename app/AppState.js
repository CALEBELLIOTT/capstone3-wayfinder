import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  reservations = []
  trips = []


  emptyReservationTemplate = `
  <div class="row">
    <div class="col-12 text-muted d-flex align-items-center justify-content-center">
      <p>No Reservations To Show</p>
    </div>
  </div>
  `
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

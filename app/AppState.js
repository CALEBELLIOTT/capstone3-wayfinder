import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  reservations = [new Reservation({ type: 'flight', name: 'Delta 1356', confirmationNumber: '245xt533ch', date: "3/5/22", cost: 245, tripId: 423152314124321, address: "2998 las vegas road" })]
  trips = [new Trip({ name: "Las Vegas", description: "Going to las vegas with my family!" })]
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

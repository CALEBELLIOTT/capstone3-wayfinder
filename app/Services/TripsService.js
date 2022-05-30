import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/trip.js"


class TripsService {
  deleteTrip(id) {
    let newTrips = ProxyState.trips.filter(t => t.id != id)
    ProxyState.trips = newTrips
  }
  addTrip(name, description) {
    ProxyState.trips = [...ProxyState.trips, new Trip({ name: name, description: description })]
  }
}

export const tripsService = new TripsService()
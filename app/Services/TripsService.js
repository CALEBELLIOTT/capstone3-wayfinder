import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/trip.js"


class TripsService {
  addTrip(name, description) {
    ProxyState.trips = [...ProxyState.trips, new Trip({ name: name, description: description })]
  }

}

export const tripsService = new TripsService()
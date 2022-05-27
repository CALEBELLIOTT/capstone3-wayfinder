import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";




function _draw() {
  let trips = ProxyState.trips
  let template = ``
  trips.forEach(t => template += t.Template)
  document.getElementById("tripData").innerHTML = template
}
export class TripsController {
  constructor() {
    console.log("trips controller loaded");
    _draw()
    ProxyState.on('trips', _draw)
  }

  addTrip() {
    let name = window.event.target.tripName.value
    let description = window.event.target.tripDescription.value
    window.event.preventDefault()
    console.log(name, description);
    tripsService.addTrip(name, description)
  }
}

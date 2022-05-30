import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";




function _draw() {
  let trips = ProxyState.trips
  let template = ``
  trips.forEach(t => template += t.Template)
  document.getElementById("tripData").innerHTML = template
  template = ``
  trips.forEach(t => template += t.TabsTemplate)
  console.log(template);
  document.getElementById("myTab").innerHTML = template
  console.log(ProxyState.trips);
}


export class TripsController {
  constructor() {
    loadState()
    console.log("trips controller loaded");
    _draw()
    ProxyState.on('trips', _draw)
    ProxyState.on('reservations', _draw)
    ProxyState.on('trips', saveState)
  }

  addTrip() {
    let name = window.event.target.tripName.value
    let description = window.event.target.tripDescription.value
    window.event.preventDefault()
    console.log(name, description);
    tripsService.addTrip(name, description)
  }

  deleteTrip(id) {
    let newTrips = ProxyState.trips.filter(t => t.id != id)
    console.log(newTrips);
    ProxyState.trips = newTrips
  }

  updateTripNotes(id) {
    window.event.preventDefault()
    let submission = window.event.target.tripNotes.value
    let targetTrip = ProxyState.trips.find(t => t.id == id)
    targetTrip.description = submission
    ProxyState.trips = ProxyState.trips
    Pop.toast('Trip Notes Updated')
  }
}

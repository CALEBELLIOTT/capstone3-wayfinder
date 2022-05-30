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
  document.getElementById("myTab").innerHTML = template
}


export class TripsController {
  constructor() {
    loadState()
    _draw()
    ProxyState.on('trips', _draw)
    ProxyState.on('reservations', _draw)
    ProxyState.on('trips', saveState)
  }

  addTrip() {
    let name = window.event.target.tripName.value
    let description = window.event.target.tripDescription.value
    window.event.preventDefault()
    tripsService.addTrip(name, description)
  }

  async deleteTrip(id) {
    if (await Pop.confirm('are you sure you want to delete the whole trip?') == true) {
      tripsService.deleteTrip(id)
    }
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

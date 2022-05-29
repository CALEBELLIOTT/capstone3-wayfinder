import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/trip.js";


export function saveState() {
  let data = {
    trips: ProxyState.trips,
    reservations: ProxyState.reservations
  }
  console.log("hello from SaveState", data);
  window.localStorage.setItem('wayFinder', JSON.stringify(data))
}


export function loadState() {
  let data = window.localStorage.getItem('wayFinder')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.reservations = obj.reservations.map(r => new Reservation(r))
    ProxyState.trips = obj.trips.map(t => new Trip(t))
  }
}
import { generateId } from "../Utils/generateId.js"



export class Reservation {
  constructor(data) {
    this.type = data.type
    this.name = data.name
    this.confirmationNumber = data.confirmationNumber
    this.date = new Date(data.date)
    this.cost = data.cost
    this.tripId = data.tripId
    this.address = data.address
    this.id = data.id || generateId()
  }

  get Template() {
    return `
    <div class="row m-1 rounded reservation-container shadow p-2">
      <div class="col-1 d-flex align-items-center">${this.type}</div>
      <div class="col-2 d-flex align-items-center">${this.name}</div>
      <div class="col-3 d-flex align-items-center">${this.confirmationNumber}</div>
      <div class="col-3 d-flex align-items-center">${this.address}</div>
      <div class="col-2 d-flex align-items-center">${this.date.toDateString()}</div>
      <div class="col-1 d-flex align-items-center justify-content-between">$${this.cost} <i onclick="app.reservationsController.deleteReservation('${this.id}')" class="mdi mdi-trash-can selectable"></i></div>
    </div>
    `
  }

}
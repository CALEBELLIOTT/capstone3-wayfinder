


export class Reservation {
  constructor(data) {
    this.type = data.type
    this.name = data.name
    this.confirmationNumber = data.confirmationNumber
    this.date = data.date
    this.cost = data.cost
    this.tripId = data.tripId
    this.address = data.address
  }

  get Template() {
    return `
    <div class="row m-1 rounded reservation-container shadow py-3">
      <div class="col-1">${this.type}</div>
      <div class="col-2">${this.name}</div>
      <div class="col-3">${this.confirmationNumber}</div>
      <div class="col-3">${this.address}</div>
      <div class="col-2">${this.date}</div>
      <div class="col-1">${this.cost}</div>
    </div>
    `
  }
}
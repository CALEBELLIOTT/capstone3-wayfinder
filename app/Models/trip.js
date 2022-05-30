import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Trip {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.id = data.id || generateId()
    this.shorterId = data.shorterId || Math.floor(Math.random() * 100000)
  }


  get Template() {
    return `
    <div class="tab-pane fade show active" id="a${this.id}" role="tabpanel" aria-labelledby="${this.name}">
    <div class="row mx-3 mb-3 bg-light p-2">
    <div class="d-flex col-12 justify-content-between">
      <h1>${this.name}</h1>
      <h4><i class="mdi mdi-trash-can selectable" onclick="app.tripsController.deleteTrip('${this.id}')"></i></h4>
    </div>
    <div class="col-1">Type</div>
    <div class="col-2">Name</div>
    <div class="col-3">Confirmation Number</div>
    <div class="col-3">Address</div>
    <div class="col-2">Date</div>
    <div class="col-1">Cost</div>
    </div>

    ${this.ReservationsTemplate}

    <div class="row p-2">
      <div class="col-12">
        <div class="separator-line mb-3 rounded"></div>
      </div>
      <div class="col-12 text-muted">Create a New Reservation</div>
      <div class="row pb-2" id="reservation-form">
        <div class="col-12">
          <form action="" onsubmit="app.reservationsController.addReservation('${this.id}')">
            <div class="row">
              <div class="col-1">
                <input class="form-control" type="select" name="type" id="type" placeholder="Type" required>
              </div>
              <div class="col-2">
                <input class="form-control" type="text" name="name" id="name" placeholder="Name" required>
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="confirmationNumber" id="confirmationNumber"
                  placeholder="Confirmation Number" required>
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="address" id="address" placeholder="Address" required>
              </div>
              <div class="col-2">
                <input class="form-control" type="date" name="date" id="date" required>
              </div>
              <div class="col-1">
                <input class="form-control" type="number" name="cost" id="cost" placeholder="$0" required>
              </div>
              <div class="col-12 text-end">
                <button class="btn">Add Reservation&nbsp<i class="mdi mdi-check"></i></button>
              </div>
            </div>
        </div>
        </form>
      </div>
      <div class="row pt-3">
      <div class="col-6">
      <h3>Notes</h3>
      <form onsubmit="app.tripsController.updateTripNotes('${this.id}')">
        <input type="text-area" class="form-control" value="${this.description}" name="tripNotes" id="tripNotes">
        <button type="submit" class="btn px-0">update trip notes&nbsp<i class="mdi mdi-check"></i> </button>
      </form>
      </div>
      <div class="col-6"></div>
      <div class="col-12 d-flex align-items-end justify-content-end pt-3">
        <h1>Total: $${this.totalReservationCost.toFixed(2)}</h1>
      </div>
    </div>
    </div>
    </div>

    `
  }

  get FormTemplate() {
    return `
      
      `
  }

  get ReservationsTemplate() {
    let emptyTemplate = ProxyState.emptyReservationTemplate
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    let template = ``
    if (reservations.length < 1) {
      return emptyTemplate
    }
    reservations.forEach(r => template += r.Template)
    return template
  }

  get totalReservationCost() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    let totalCost = 0
    reservations.forEach(r => totalCost += parseInt(r.cost))
    return totalCost
  }


  get TabsTemplate() {
    return `
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="${this.name}" data-bs-toggle="tab" data-bs-target="#a${this.id}" type="button"
        role="tab" aria-controls="home" aria-selected="true">${this.name}</button>
    </li>
    `
  }
}
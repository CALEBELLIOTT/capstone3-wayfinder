import { generateId } from "../Utils/generateId.js"



export class Trip {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.id = data.id || generateId()
  }


  get Template() {
    return `
    

    <div class="container pb-2" id="tripData">
    <div class="row m-3 bg-light">
      <div class="trip-names d-flex col-12" id="trip-names">
        <h3 class="bg-light">${this.name}</h3>
      </div>
      <div class="col-1">Type</div>
      <div class="col-2">Name</div>
      <div class="col-3">Confirmation Number</div>
      <div class="col-3">Address</div>
      <div class="col-2">Date</div>
      <div class="col-1">Cost</div>
    </div>
    <div class="row m-3 rounded reservation-container shadow py-3" id="${this.id}">
      <!-- NOTE reservations template beginning -->
      <!-- <div class="col-1">Type</div>
      <div class="col-2">Name</div>
      <div class="col-3">Confirmation Number</div>
      <div class="col-3">Address</div>
      <div class="col-2">Date</div>
      <div class="col-1">Cost</div> -->
      <!-- NOTE reservations template end -->
    </div>
    <div class="row pb-2">
      <div class="col-12">
        <div class="separator-line mb-3 rounded"></div>
      </div>

      <div class="row pb-2" id="reservation-form">
        <div class="col-12">
          <form action="" onsubmit="app.reservationsController.addReservation('${this.id}')">
            <div class="row">
              <div class="col-1">
                <input class="form-control" type="select" name="type" id="type" placeholder="Type">
              </div>
              <div class="col-2">
                <input class="form-control" type="text" name="name" id="name" placeholder="Name">
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="confirmationNumber" id="confirmationNumber"
                  placeholder="Confirmation Number">
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="address" id="address" placeholder="Address">
              </div>
              <div class="col-2">
                <input class="form-control" type="date" name="date" id="date">
              </div>
              <div class="col-1">
                <input class="form-control" type="number" name="cost" id="cost" placeholder="$0">
              </div>
              <div class="col-12 text-end">
                <button class="btn">Add Reservation&nbsp<i class="mdi mdi-check"></i></button>
              </div>
            </div>
        </div>
        </form>
      </div>
    </div>


    `
  }

  get FormTemplate() {
    return `
      
      `
  }
}
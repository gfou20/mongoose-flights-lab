import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}


function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/flights/new')
//   })
}

export {
  index,
  newFlight as new
}
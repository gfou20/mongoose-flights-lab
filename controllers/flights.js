import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'ALL FLIGHTS'
    })
  })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/flights/new')
//   })
}

export {
  index,
}
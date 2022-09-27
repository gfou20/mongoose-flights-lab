import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String, match: /[A-F][1-9]\d?/},
  price: {
    type: Number, min: 0}
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['United', 'Delta', 'American', 'Southwest', 'Spirit']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo:{
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
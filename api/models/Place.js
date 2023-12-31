const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    owner: {type: mongoose.Types.ObjectId, ref:'User'},
    title:String,
    address: String,
    photos:[String],
    perks:[String],
    description:String,
    extraInfo:String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
    price:Number
})

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel
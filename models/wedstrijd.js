const mongoose = require('mongoose');

const wedstrijdSchema = new mongoose.Schema({
    poule: {
        type: String,
        required: true
    },
    teamThuis: {
        type: String,
        required: true
    },
    teamGast: {
        type: String,
        required: true
    },
    puntenThuis: {
        type: Number,
        required: true
    },
    puntenGast: {
        type: Number,
        required: true
    },
    startTijd: {
        type: Date,
        required: true
    },
    veld: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Wedstrijd', wedstrijdSchema);
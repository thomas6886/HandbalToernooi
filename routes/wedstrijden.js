const express = require('express');
const router = express.Router();
const Wedstrijd = require('../models/wedstrijd');

// Get all wedstrijden
router.get('/', async (req, res) => {
    try {
        const wedstrijden = await Wedstrijd.find();
        res.json(wedstrijden);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Get one wedstrijd
router.get('/:id', getWedstrijd, (req, res) => {
    res.json(res.wedstrijd);
});

// Create one wedstrijd
router.post('/', async (req, res) => {
    const wedstrijd = new Wedstrijd({
        poule: req.body.poule,
        teamThuis: req.body.teamThuis,
        teamGast: req.body.teamGast,
        puntenThuis: req.body.puntenThuis,
        puntenGast: req.body.puntenGast,
        startTijd: req.body.startTijd,
        veld: req.body.veld
    });

    try {
        const newWedstrijd = await wedstrijd.save()
        res.status(201).json(newWedstrijd)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Update one wedstrijd
router.patch('/:id', getWedstrijd, async(req, res) => {
    if (req.body.puntenThuis != null) {
        res.wedstrijd.puntenThuis = req.body.puntenThuis
    }

    if (req.body.puntenGast != null) {
        res.wedstrijd.puntenGast = req.body.puntenGast
    }
    try {
        const updatedWedstrijd = await res.wedstrijd.save();
        res.json(updatedWedstrijd);
    } catch (err){
        res.status(400).json({ message: err.message })
    }
});

// Delete one wedstrijd
router.delete('/:id', getWedstrijd, async (req, res) => {
    try {
        await res.wedstrijd.remove()
        res.json({ message: 'Deze wedstrijd is verwijderd' })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
});

async function getWedstrijd(req, res, next) {
    try {
        wedstrijd = await Wedstrijd.findById(req.params.id);
        if (wedstrijd == null) {
            return res.status(404).json({ message: 'Deze wedstrijd bestaat niet'})
        }
    } catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.wedstrijd = wedstrijd;
    next()
}

module.exports = router;
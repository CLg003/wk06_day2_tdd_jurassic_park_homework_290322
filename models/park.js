const Dinosaur = require('./dinosaur.js');

const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    let index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.mostPopularDinosaur = function() {
    let visitorsPerDay = 0;
    let favouriteDinosaur;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > visitorsPerDay) {
            visitorsPerDay = dinosaur.guestsAttractedPerDay;
            favouriteDinosaur = dinosaur;
        }
    }
    return favouriteDinosaur;
}

Park.prototype.findAllOfSpecies = function(species) {
    let dinosaursOfSpecies = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaursOfSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSpecies;
}

module.exports = Park;
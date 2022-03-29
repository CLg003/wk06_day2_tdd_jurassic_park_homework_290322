const Dinosaur = require('./dinosaur.js');

const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

// Add dinosaur
Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

// Remove dinosaur
Park.prototype.removeDinosaur = function(dinosaur) {
    let index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

// Dinosaur that attracts the most visitors
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

// Find all dinosaurs of a particular species
Park.prototype.findAllDinosaursOfSpecies = function(species) {
    let dinosaursOfSpecies = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaursOfSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSpecies;
}

// Total number of park visitors per day
Park.prototype.totalVisitorsPerDay = function() {
    let total = 0;
    for (let dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

// Total number of park visitors per year
Park.prototype.totalVisitorsPerYear = function() {
    let visitsPerYear = this.totalVisitorsPerDay() * 365;
    return visitsPerYear;
}

// Total revenue from ticket sales in one year
Park.prototype.totalAnnualTicketSalesRevenue = function() {
    let annualTicketSalesRevenue = this.totalVisitorsPerYear() * this.ticketPrice;
    return annualTicketSalesRevenue;
}

// Remove all dinosaurs of a particular species
Park.prototype.removeAllDinosaursOfSpecies = function(species) {
    for (let i = this.dinosaurs.length - 1; i >= 0; i --) {
        if (this.dinosaurs[i].species === species) {
            this.dinosaurs.splice(i, 1);
        }
    }
}

// Create object containing each diet type with number of park dinosaurs of that diet type

module.exports = Park;
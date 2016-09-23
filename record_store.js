var _ = require('lodash');
var Record = require('./records');

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  sellRecord: function(recordTitle) {
    return _.find(this.inventory, function(record) {
      if(record.title === recordTitle) {
        this.balance += record.price;
        this.inventory.pop(record)
      }
    }.bind(this))
  },
  totalInventoryValue: function() {
    var inventoryValue = _.map(this.inventory, function(record) {
      return record.price;
    })
    return _.sum(inventoryValue)
  },
  totalNetValue: function() {
    return this.balance + this.totalInventoryValue();
  },
  financialAnalysis: function() {
    console.log("Total inventory value: " + this.totalInventoryValue() + ", Balance: " + this.balance)
  }
}

module.exports = RecordStore;
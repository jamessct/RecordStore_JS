var _ = require('lodash');
var Record = require('./records');

var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
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
  listInventory: function() {
    var listInventory = _.forEach(this.inventory, function(record) {
      return record
    })
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
    return ("Total inventory value: " + this.totalInventoryValue() + ", Balance: " + this.balance + ", Total net value: " + this.totalNetValue())
  }
}


var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
harveysHouseOfSoundtracks.listInventory();

module.exports = RecordStore;
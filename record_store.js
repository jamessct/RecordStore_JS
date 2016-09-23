var _ = require('lodash');

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
  financialAnalysis: function() {
    var inventoryValue = _.map(this.inventory(record), function(record) {
      return record.price;
    })
    return _.sum(inventoryValue)
  }
}

var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");

module.exports = RecordStore;
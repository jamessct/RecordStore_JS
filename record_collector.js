var RecordCollector = function(name, cashmoney) {
  this.name = name;
  this.cashmoney = cashmoney;
  this.collection = [];
}

RecordCollector.prototype = {
  buy: function(recordTitle, record, recordStore) {
    recordStore.sellRecord(recordTitle);
    this.cashmoney -= record.price;
    this.collection.push(record);
  }
}

module.exports = RecordCollector;
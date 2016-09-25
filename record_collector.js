var RecordCollector = function(name, cashmoney) {
  this.name = name;
  this.cashmoney = cashmoney;
  this.collection = [];
}

RecordCollector.prototype = {
  addRecord: function(record) {
    this.collection.push(record)
  },
  buy: function(recordTitle, record, recordStore) {
    recordStore.sellRecord(recordTitle);
    this.cashmoney -= record.price;
    this.collection.push(record);
  },
  sell: function(recordTitle, record, recordStore) {
    if(recordTitle === record.title) {
      this.collection.pop(record);
      recordStore.addRecord(record);
      this.cashmoney += record.price;
      recordStore.balance -= record.price;
    } 
  }
}

module.exports = RecordCollector;
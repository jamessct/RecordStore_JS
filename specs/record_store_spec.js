var RecordStore = require('../record_store');
var Record = require('../records');
var RecordCollector = require('../record_collector')
var assert = require('assert');

describe("RecordStore", function() {
  it("should have a name and city", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    assert.equal("Harvey's House of Soundtracks", harveysHouseOfSoundtracks.name);
    assert.equal("Dunfermline", harveysHouseOfSoundtracks.city)
  })
  it("should be able to add records", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    assert.deepEqual([ { "artist": "Various Artists", "title": "James Bond Soundtrack", "price": 10 } ], harveysHouseOfSoundtracks.inventory)
  })
  it("should remove record from inventory by selling", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    harveysHouseOfSoundtracks.sellRecord("James Bond Soundtrack");
    assert.deepEqual([], harveysHouseOfSoundtracks.inventory)
  })
  it("should increase balance by price of record when selling", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    harveysHouseOfSoundtracks.sellRecord("James Bond Soundtrack");
    assert.equal(10, harveysHouseOfSoundtracks.balance)
  })
  it("should give an inventory list", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    var harryPotterSoundtrack = new Record("Various Artists", "Harry Potter Soundtrack", 5);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    harveysHouseOfSoundtracks.addRecord(harryPotterSoundtrack);
    assert.equal("Title: James Bond Soundtrack, Artist: Various Artists, Price:10/nTitle: Harry Potter Soundtrack, Artist: Various Artists, Price:5", harveysHouseOfSoundtracks.listInventory())
  })
  it("should give total value of inventory", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    assert.equal(10, harveysHouseOfSoundtracks.totalInventoryValue())
  })
  it("should give total net value", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    var harryPotterSoundtrack = new Record("Various Artists", "Harry Potter Soundtrack", 5);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    harveysHouseOfSoundtracks.addRecord(harryPotterSoundtrack);
    harveysHouseOfSoundtracks.sellRecord(jamesBondSoundtrack);
    assert.equal(15, harveysHouseOfSoundtracks.totalNetValue())
  })
  it("should give financial analysis", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var harryPotterSoundtrack = new Record("Various Artists", "Harry Potter Soundtrack", 5);
    harveysHouseOfSoundtracks.addRecord(harryPotterSoundtrack);    
    assert.equal("Total inventory value: 5, Balance: 0, Total net value: 5", harveysHouseOfSoundtracks.financialAnalysis())
  })
})
var RecordStore = require('../record_store');
var Record = require('../records');
var assert = require('assert');

describe("RecordStore", function() {
  it("should have a name and city", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
    assert.equal("Harvey's House of Soundtracks", harveysHouseOfSoundtracks.name);
    assert.equal("Dunfermline", harveysHouseOfSoundtracks.city)
  })
  it("should be able to add records", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    assert.deepEqual([ { "artist": "Various Artists", "title": "James Bond Soundtrack", "price": 10 } ], harveysHouseOfSoundtracks.inventory)
  })
  it("should remove record from inventory by selling", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
    harveysHouseOfSoundtracks.sellRecord("James Bond Soundtrack");
    assert.deepEqual([], harveysHouseOfSoundtracks.inventory)
  })
  it("should increase balance by price of record when selling", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    harveysHouseOfSoundtracks.sellRecord("James Bond Soundtrack");
    assert.equal(10, harveysHouseOfSoundtracks.balance)
  })
  it("should give a financial analysis", function() {
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline");
    assert.equal(10, harveysHouseOfSoundtracks.financialAnalysis())
  })
})
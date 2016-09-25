var RecordStore = require('../record_store');
var Record = require('../records');
var RecordCollector = require('../record_collector');
var assert = require('assert');

describe("RecordCollector", function() {
  it("should have a name and balance", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    assert.equal("Jimmy", jimmy.name);
    assert.equal(300, jimmy.cashmoney)
  })
  it("should be able to add record to collection", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    jimmy.addRecord(jamesBondSoundtrack);
    assert.deepEqual([{ "artist": "Various Artists", "price": 10, "title": "James Bond Soundtrack" }], jimmy.collection)
  })
  it("should lose cahsmoney when buying a record", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    jimmy.buy("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.equal(290, jimmy.cashmoney)
  })
  it("should add to collection when buying record", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    jimmy.buy("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.deepEqual([{ "artist": "Various Artists", "price": 10, "title": "James Bond Soundtrack" }], jimmy.collection)
  })
  it("should add cashmoney to store balance when buying", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    jimmy.buy("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.equal(10, harveysHouseOfSoundtracks.balance)
  })
  it("should remove record from store inventory when buying", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    harveysHouseOfSoundtracks.addRecord(jamesBondSoundtrack);
    jimmy.buy("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.deepEqual([], harveysHouseOfSoundtracks.inventory)
  })
  it("should gain cashmoney when selling record", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    jimmy.addRecord(jamesBondSoundtrack);
    jimmy.sell("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.equal(310, jimmy.cashmoney)
  })
  it("should remove album from collection when selling", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 0);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    jimmy.addRecord(jamesBondSoundtrack);
    jimmy.sell("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.deepEqual([], jimmy.collection)
  })
  it("should deduct cashmoney from store when selling album", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 100);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    jimmy.addRecord(jamesBondSoundtrack);
    jimmy.sell("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.equal(90, harveysHouseOfSoundtracks.balance)
  })
  it("should add record to store inventory when selling album", function() {
    var jimmy = new RecordCollector("Jimmy", 300);
    var harveysHouseOfSoundtracks = new RecordStore("Harvey's House of Soundtracks", "Dunfermline", 100);
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    jimmy.addRecord(jamesBondSoundtrack);
    jimmy.sell("James Bond Soundtrack", jamesBondSoundtrack, harveysHouseOfSoundtracks);
    assert.deepEqual([{ "artist": "Various Artists", "price": 10, "title": "James Bond Soundtrack" }], harveysHouseOfSoundtracks.inventory)
  })
})
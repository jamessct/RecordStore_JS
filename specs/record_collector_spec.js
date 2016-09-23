var RecordStore = require('../record_store');
var Record = require('../records');
var RecordCollector = require('../record_collector');
var assert = require('assert');

describe("RecordCollector", function() {
  it("should have a name", function() {
    var jimmy = new RecordCollector("Jimmy");
    assert.equal("Jimmy", jimmy.name)
  })
  it("should be able to buy record")
})
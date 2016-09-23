var Record = require('../records');
var assert = require('assert');

describe("Record", function() {
  it("should have an artist, title and price", function() {
    var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
    assert.equal("Various Artists", jamesBondSoundtrack.artist);
    assert.equal("James Bond Soundtrack", jamesBondSoundtrack.title);
    assert.equal(10, jamesBondSoundtrack.price);
  })
})
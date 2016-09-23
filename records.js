var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var jamesBondSoundtrack = new Record("Various Artists", "James Bond Soundtrack", 10);
var harryPotterSoundtrack = new Record("Various Artists", "Harry Potter Soundtrack", 5);

module.exports = Record
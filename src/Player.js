function Player() {
    this.choice = null;
    this.options = ['cooperate', 'defect'];

}
Player.prototype.choose = function(option) {
    var oIndex = this.options.indexOf(option)
    this.choice = this.options[oIndex];
};

Player.prototype.pause = function() {
    this.isPlaying = false;
};

Player.prototype.resume = function() {
    if (this.isPlaying) {
        throw new Error("song is already playing");
    }

    this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
};
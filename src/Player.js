function Player(id = 0) {
    this.id = id;
    this.choice = null;
    this.options = ['cooperate', 'defect'];

}
Player.prototype.choose = function(option) {
    this.choice = this.options.indexOf(option)

};

Player.prototype.setGame = function(currGame) {
    this.game = currGame;
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
function Player(id = 0) {
    this.id = id;
    this.choice = null;
    this.options = ['cooperate', 'defect'];


}
Player.prototype.setOpponent = function(opp) {
    this.opponent = opp;
};
Player.prototype.choose = function(option) {
    this.choice = this.options.indexOf(option)

};

Player.prototype.setGame = function(currGame) {
    this.game = currGame;
};

Player.prototype.potentialPayoffs = function() {
    // if (this.game) {
    //     this.payoffs = this.game.payoffs.map(function(elem) {
    //         return elem[this.id];
    //     }, this);
    // }

};

Player.prototype.makeFavorite = function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
};
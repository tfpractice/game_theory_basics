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

Player.prototype.oppContext = function(cIndex) {
    return this.game.playerChoiceFilter(this.opponent.id, cIndex);
};

Player.prototype.potentialPayoffs = function(oChoice) {
    var possibilities = this.oppContext(oChoice);
    return possibilities.map(function(elem) {
        return elem[this.id];
    }, this);

};

Player.prototype.contextDom = function(oChoice) {
    var utilties = this.potentialPayoffs(oChoice);
    var max = Math.max(...utilties);
    return this.options[max];
};
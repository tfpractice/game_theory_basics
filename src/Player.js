function Player(id = 0) {
    this.id = id;
    this.choice = null;
    this.options = ['cooperate', 'defect'];
    this.strict = [];
    this.weak = [];
    this.dominated = [];
    this.bestChoices = [];


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
    var min = Math.min(...utilties);
    var bestChoice = utilties.indexOf(min);
    return this.options[bestChoice];
};

Player.prototype.strictDom = function(cIndex) {
    var cDom0 = this.contextDom(0);
    var cDom1 = this.contextDom(1);
    return cDom0 == cDom1;
};
Player.prototype.setStrategies = function() {
    this.options.forEach(function(choice, cIndex) {
        this.bestChoices[cIndex] = this.contextDom(cIndex);
    }, this);
};
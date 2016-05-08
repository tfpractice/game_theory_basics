function Player(id = 0) {
    this.id = id;
    this.choice = null;
    this.options = ['cooperate', 'defect'];
    this.strategies = {
        'cooperate': {
            name: 'cooperate'
        },
        'defect': {
            name: 'defect'
        }
    };
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

Player.prototype.extractUtilities = function(oChoice, cIndex, altIndex) {
    var utilties = this.potentialPayoffs(oChoice);
    var cUtil = utilties[cIndex];
    var altUtil = utilties[altIndex];
    return [cUtil, altUtil];
};
Player.prototype.contextDom = function(oChoice) {
    // var utilties = this.extractUtilities(oChoice, cIndex, altIndex);
    var utilties = this.potentialPayoffs(oChoice);
    // var cUtil = utilties[cIndex];
    // var altUtil = utilties[altIndex];
    var min = Math.min(...utilties);
    var bestChoice = utilties.indexOf(min);
    return this.options[bestChoice];
};

Player.prototype.conDom = function(oChoice, cIndex, altIndex) {
    var utilSet = this.extractUtilities(oChoice, cIndex, altIndex);
    return utilSet[0] > utilSet[1];
};
Player.prototype.strictDom = function(cIndex, altIndex) {
    var cDom0 = this.contextDom(0);
    var cDom1 = this.contextDom(1);
    return cDom0 == cDom1;
};

Player.prototype.sDom = function(cIndex, altIndex) {
    this.options.all(function(context) {
        return this.conDom(context, cIndex, altIndex) == true;
    })
};
Player.prototype.setStrategies = function() {
    this.options.forEach(function(choice, cIndex) {
        this.bestChoices[cIndex] = this.contextDom(cIndex);
    }, this);
};
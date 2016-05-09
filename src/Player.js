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
Player.prototype.updateStrategies = function() {
    this.options.forEach(function(el) {
        this.strategies[el];
    })
};

Player.prototype.uStrat = function(strat, oChoice) {
    this.strategies[strat]['']
};
Player.prototype.setOpponent = function(opp) {
    this.opponent = opp;
};

Player.prototype.choose = function(option) {
    this.choice = this.options.indexOf(option)

};

Player.prototype.setGame = function(currGame) {
    this.game = currGame;
};

Player.prototype.oppContext = function(oChoice) {
    return this.game.playerChoiceFilter(this.opponent.id, oChoice);
};

Player.prototype.potentialPayoffs = function(oChoice) {
    var possibilities = this.oppContext(oChoice);
    return possibilities.map(function(elem) {
        return elem[this.id];
    }, this);

};

Player.prototype.extractUtilities = function(oChoice, choice, alt) {
    var utilties = this.potentialPayoffs(oChoice);
    //console.log(utilties);
    var cUtil = utilties[this.options.indexOf(choice)];
    var altUtil = utilties[this.options.indexOf(alt)];
    return [cUtil, altUtil];
};
Player.prototype.contextDom = function(oChoice) {
    // var utilties = this.extractUtilities(oChoice, cIndex, altIndex);
    var utilties = this.potentialPayoffs(oChoice);
    // var cUtil = utilties[cIndex];
    // var altUtil = utilties[altIndex];
    var min = Math.min(...utilties);
    //console.log(utilties);
    var bestChoice = utilties.indexOf(min);
    //console.log(bestChoice);

    return this.options[bestChoice];
};

Player.prototype.conDom = function(oChoice, choice, alt) {
    var utilSet = this.extractUtilities(oChoice, choice, alt);
    return utilSet[0] < utilSet[1];
};
Player.prototype.strictDom = function(choice, altIndex) {
    var cDom0 = this.contextDom('cooperate');
    var cDom1 = this.contextDom('defect');
    return cDom0 == cDom1;
};

Player.prototype.sDom = function(cIndex, altIndex) {
    this.options.all(function(context) {
        return this.conDom(context, cIndex, altIndex) == true;
    }, this);
};
Player.prototype.setStrategies = function() {
    this.options.forEach(function(choice, cIndex) {
        this.bestChoices[cIndex] = this.contextDom(cIndex);
    }, this);
};
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
    }, this);
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
    return (this.game.contextUtil(this.opponent, oChoice));
    return this.game.playerChoiceFilter(this.opponent.id, oChoice);
};

Player.prototype.oC = function(oChoice) {
    return (this.game.contextUtil(this.opponent, oChoice));
};

Player.prototype.contextUtil = function(oChoice) {
    var poss = this.oC(oChoice);
    var index = this.id;
    return Object.keys(poss).reduce(function(util, key) {
        util[key] = poss[key][index];
        return util;
    }, {});
};

Player.prototype.bestOptions = function(oChoice) {
    var pp = this.contextUtil(oChoice);
    var uA = Object.keys(pp).reduce(function(uArray, key) {
        uArray.push(pp[key]);
        return uArray;
    }, []);
    var bestChoice = Math.min(...uA);
    return Object.keys(pp).filter(function(key) {
        return pp[key] == bestChoice;
    }, this);
};

Player.prototype.extractUtilities = function(oChoice, choice, alt) {
    var utilties = this.contextUtil(oChoice);
    var cUtil = utilties[this.options.indexOf(choice)];
    var altUtil = utilties[this.options.indexOf(alt)];
    return [cUtil, altUtil];
};

Player.prototype.preferred = function(oChoice, choice, alt) {
    var utilSet = this.contextUtil(oChoice, choice, alt);
    return utilSet[choice] < utilSet[alt];
};

Player.prototype.strictDom = function(choice, alt) {
    return this.options.every(function(context) {
        return this.preferred(context, choice, alt) == true;
    }, this);
};

Player.prototype.setStrategies = function() {
    this.options.forEach(function(choice, choice) {
        this.bestChoices[choice] = this.bestOptions(choice);
    }, this);
};
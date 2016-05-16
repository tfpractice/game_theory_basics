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
Player.prototype.setOptions = function(opts = []) {
    this.options = opts;
};
Player.prototype.choose = function(option) {
    this.choice = this.options.indexOf(option)
};
Player.prototype.setGame = function(currGame) {
    this.game = currGame;
};
Player.prototype.oppContext = function(oChoice) {
    return (this.game.contextUtil(this.opponent, oChoice));
};
Player.prototype.contextUtil = function(oChoice) {
    var poss = this.oppContext(oChoice);
    var index = this.id;
    return Object.keys(poss).reduce(function(util, key) {
        util[key] = poss[key][index];
        return util;
    }, {});
};
Player.prototype.setDStrat = function() {
    this.options.map(function(opt) {
        this.findDominated(opt);
    }, this);
};

Player.prototype.findDominated = function(strat) {
    if (this.dominatesAny(strat) != false) {
        var dom = this.altStrat(strat).filter(function(alt) {
            return this.strictDom(strat, alt) == true;
        }, this);
        dom.forEach(function(elem) {
            this.addUnplayable(elem);
        }, this);
        return dom;
    } else {
        return null;
    }
};

Player.prototype.addUnplayable = function(dStrat) {
    if (this.dominated.indexOf(dStrat) < 0) {
        this.dominated.push(dStrat);
    }
};
Player.prototype.dominatesAny = function(strat) {
    return this.altStrat(strat).some(function(elem) {
        return this.strictDom(strat, elem) == true;
    }, this);
};
Player.prototype.altStrat = function(strat) {
    return this.options.filter(function(elem) {
        return elem != strat && this.dominated.indexOf(elem) < 0;
    }, this);
};
Player.prototype.bestOptions = function(oChoice) {
    var pp = this.contextUtil(oChoice);
    var uA = Object.keys(pp).reduce(function(uArray, key) {
        uArray.push(pp[key]);
        return uArray;
    }, []);
    var bestChoice = Math.max(...uA);
    return Object.keys(pp).filter(function(key) {
        return pp[key] == bestChoice;
    }, this);
};
Player.prototype.preferred = function(oChoice, choice, alt) {
    var utilSet = this.contextUtil(oChoice, choice, alt);
    return utilSet[choice] > utilSet[alt];
};
Player.prototype.strictDom = function(choice, alt) {
    return this.opponent.options.every(function(context) {
        return this.preferred(context, choice, alt) == true;
    }, this);
};
Player.prototype.setStrategies = function() {
    this.options.forEach(function(choice, choice) {
        this.bestChoices[choice] = this.bestOptions(choice);
    }, this);
};
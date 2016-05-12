function Dilemma(p0 = new Player(0), p1 = new Player(1)) {
    this.players = [p0, p1];
    this.players[0].setOpponent(this.players[1]);
    this.players[1].setOpponent(this.players[0]);
    this.options = ['cooperate', 'defect'];
    this.utility = [
        [
            [1, 1],
            [12, 0]
        ],
        [
            [0, 12],
            [6, 6]
        ]
    ];
    this.uMat = {
        'cooperate': {
            'cooperate': [1, 1],
            'defect': [12, 0],
        },
        'defect': {
            'cooperate': [0, 12],
            'defect': [6, 6]
        },
    };
    this.assignDilemma();
}

Dilemma.prototype.assignDilemma = function() {
    this.players.forEach(function(p) {
        p.setGame(this);
    }, this);
};

Dilemma.prototype.playerChoiceFilter = function(pIndex, choice) {
    if (pIndex == 0) {
        return this.p0Filter(choice);
    } else if (pIndex == 1) {
        return this.p1Filter(choice);
    }
};

Dilemma.prototype.p0Filter = function(choice) {
    return this.utility[this.cIndex(choice)];
};

Dilemma.prototype.contextUtil = function(player, choice) {
    var result;
    if (player.id == 0) {
        result = this.f0(choice);
    } else if (player.id == 1) {
        result = this.f1(choice);
    }
    return result;
};

Dilemma.prototype.f0 = function(choice) {
    return this.uMat[choice];
};

Dilemma.prototype.f1 = function(choice) {
    var result = {};
    Object.keys(this.uMat).forEach(function(elem) {
        result[elem] = this.uMat[elem][choice]
    }, this);
    return result;
};

Dilemma.prototype.cIndex = function(choice) {
    return this.options.indexOf(choice);
};

Dilemma.prototype.p1Filter = function(choice) {
    return this.utility.map(function(elem) {
        return elem[this.cIndex(choice)];
    }, this);
};

Dilemma.prototype.dominates = function(pIndex, choice, alt, oIndex, oChoice) {
    var pcUtil = this.playerChoiceFilter(oIndex, oChoice);
    return pcUtil[this.cIndex(choice)][pIndex] < pcUtil[this.cIndex(alt)][pIndex];
};

Dilemma.prototype.strictDominates = function(pIndex, choice, alt, oIndex) {
    var oppFirst = this.dominates(pIndex, choice, alt, oIndex, 'cooperate');
    var oppSecond = this.dominates(pIndex, choice, alt, oIndex, 'defect');
    return oppFirst == true && oppSecond == true;
};
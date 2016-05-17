function Dilemma(p0 = new Player(0), p1 = new Player(1)) {
    this.players = [p0, p1];
    // this.players[0].setOpponent(this.players[1]);
    // this.players[1].setOpponent(this.players[0]);
    this.options = [
        ['cooperate', 'defect'],
        ['cooperate', 'defect']
    ];
    this.uMat = {
        'cooperate': {
            'cooperate': [-1, -1],
            'defect': [-12, 0],
        },
        'defect': {
            'cooperate': [0, -12],
            'defect': [-6, -6]
        },
    };
    this.assignDilemma();
}

Dilemma.prototype.assignDilemma = function() {
    this.players.forEach(function(p) {
        var oppIndex = (p.id + 1) % 2;
        p.setGame(this);
        p.setOptions(this.options[p.id]);
        p.setOpponent(this.players[oppIndex]);
    }, this);
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
    var mat = this.uMat;
    return Object.keys(this.uMat).reduce(function(uArr, key, id, arr) {
        uArr[key] = mat[key][choice];
        return uArr;
    }, {});
};

Dilemma.prototype.cIndex = function(player, choice) {
    return this.options[player.id].indexOf(choice);
};

Dilemma.prototype.dominates = function(player, choice, alt, opponent, oChoice) {
    var pcUtil = this.contextUtil(opponent, oChoice);
    return pcUtil[choice][player.id] > pcUtil[alt][player.id];
};

Dilemma.prototype.strictDominates = function(player, choice, alt, opponent) {
    return this.options[player.id].every(function(strat) {
        return this.dominates(player, choice, alt, opponent, strat) == true;
    }, this);
};
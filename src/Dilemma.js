function Dilemma(p0 = new Player(0), p1 = new Player(1)) {
    this.players = [p0, p1];
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

}

Dilemma.prototype.assignDilemma = function() {
    this.players.forEach(function(p) {
        p.setGame(this);
    }, this);
};
Dilemma.prototype.playerChoiceFilter = function(pIndex, cIndex) {
    if (pIndex == 0) {
        return this.p0Filter(cIndex);
    } else if (pIndex == 1) {
        return this.p1Filter(cIndex);
    }
};

Dilemma.prototype.p0Filter = function(cIndex) {
    return this.utility[cIndex];
};

Dilemma.prototype.p1Filter = function(cIndex) {
    return this.utility.map(function(elem) {
        return elem[cIndex];
    });
};

Dilemma.prototype.dominates = function(pIndex, strategyIndex, altIndex, oIndex, oChoice) {
    var pcUtil = this.playerChoiceFilter(oIndex, oChoice);
    return pcUtil[strategyIndex][pIndex] < pcUtil[altIndex][pIndex];
};
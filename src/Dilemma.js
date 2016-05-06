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
Dilemma.prototype.playerChoiceFilter = function(pindex, cindex) {
    // this.utility.filter(function(el, id, arr) {
    // return arr.indexOf(el);
    // });
};

Dilemma.prototype.p0Filter = function(cindex) {
    return this.utility[cindex];
};

Dilemma.prototype.p1Filter = function(cindex) {
    return this.utility.map(function(elem) {
        return elem[cindex];
    });
};
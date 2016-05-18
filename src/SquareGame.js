function SquareGame(p0 = new Player(0), p1 = new Player(1)) {
    this.players = [p0, p1];
    this.options =
        [
        ['top', 'center', 'bottom'],
        ['left', 'center', 'right']
    ];
    this.uMat = {
        'top': {
            'left': [13, 3],
            'center': [1, 4],
            'right': [7, 3]
        },
        'center': {
            'left': [4, 1],
            'center': [3, 3],
            'right': [6, 2]
        },
        'bottom': {
            'left': [-1, 9],
            'center': [2, 8],
            'right': [8, -1]
        }
    };
    this.equilibria = [];
    this.assignGame();
}
SquareGame.prototype.assignGame = function() {
    this.players.forEach(function(p, id) {
        var oppIndex = (p.id + 1) % 2;
        p.setGame(this);
        p.setOptions(this.options[p.id]);
        p.setOpponent(this.players[oppIndex]);
    }, this);
    this.players.forEach(function(p, id) {
        p.setDStrat();
        p.optimizeChoices();
    }, this);
};
SquareGame.prototype.f0 = function(choice) {
    return this.uMat[choice];
};
SquareGame.prototype.f1 = function(choice) {
    var mat = this.uMat;
    return Object.keys(mat).reduce(function(uArr, key, id, arr) {
        uArr[key] = mat[key][choice];
        return uArr;
    }, {});
};
SquareGame.prototype.validateChoice = function(player, choice) {
    return this.options[player.id].indexOf(choice) > -1 ? true : false;
};
SquareGame.prototype.contextUtil = function(player, choice) {
    var result;
    if (this.validateChoice(player, choice) == true) {
        if (player.id == 0) {
            result = this.f0(choice);
        } else if (player.id == 1) {
            result = this.f1(choice);
        }
    } else {
        result = null;
    }
    return result;
};
SquareGame.prototype.playerBest = function(player) {
    player.options.map(function(opt) {}, this);
    return player.bestChoices;
};
SquareGame.prototype.bestIncludes = function(player, choice, query) {
    return player.bestChoices[choice].indexOf(query) > 0;
};
SquareGame.prototype.compareBest = function(player, choice, oChoice) {
    var pChoices = player.bestChoices[oChoice];
    var oChoices = player.opponent.bestChoices[choice];
    pChoices.forEach(function(elem) {}, this);
};
SquareGame.prototype.queryBest = function(player, context) {
    return this.playerBest(player)[context];
};
SquareGame.prototype.singleNash = function(player, oChoice) {
    var choices = player.bestChoices[oChoice];
    choices.map(function(opt) {
        if (player.opponent.bestChoices[opt].indexOf(oChoice) > -1) {
            var nashArray = [oChoice, opt];
            if (this.equilibria.indexOf(nashArray) < 0) {
                this.equilibria.push(nashArray);
            }
        }
    }, this);
};
SquareGame.prototype.nash = function() {
    this.players[1].options.filter(function(c1) {
        this.singleNash(this.players[0], c1);
    }, this);
};
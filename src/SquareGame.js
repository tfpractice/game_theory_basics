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
    this.assignGame();
}

SquareGame.prototype.assignGame = function() {
    this.players.forEach(function(p, id) {
        var oppIndex = (p.id + 1) % 2;
        p.setGame(this);
        p.setOpponent(this.players[oppIndex]);
        p.setOptions(this.options[p.id]);
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
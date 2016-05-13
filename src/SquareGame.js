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
    return this.options[0].indexOf(choice) > -1 ? this.uMat[choice] : null;
};

SquareGame.prototype.f1 = function(choice) {
    if (this.options[1].indexOf(choice) > -1) {
        var mat = this.uMat;
        return Object.keys(mat).reduce(function(uArr, key, id, arr) {
            uArr[key] = mat[key][choice];
            return uArr;
        }, {});
    } else {
        return null;
    }
};

SquareGame.prototype.contextUtil = function(player, choice) {
    var result;
    if (player.id == 0) {
        result = this.f0(choice);
    } else if (player.id == 1) {
        result = this.f1(choice);
    }
    return result;
};
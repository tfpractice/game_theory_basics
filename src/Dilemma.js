function Dilemma(p0 = new Player(0), p1 = new Player(1)) {
    this.players = [p0, p1];
    this.payoffs = [
        [-1, -1],
        [-12, 0],
        [0, -12],
        [-8, -8]
    ];
}
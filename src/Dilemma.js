function Dilemma() {
    this.players = [new Player(0), new Player(1)];
    this.payoffs = [
        [-1, -1],
        [-12, 0],
        [0, -12],
        [-8, -8]
    ];
}
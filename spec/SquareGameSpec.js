describe('SquareGame', () => {
    var myGame, p0, p1;
    beforeEach(function() {
        myGame = new SquareGame();
        p0 = myGame.players[0];
        p1 = myGame.players[1];
    });
    describe('init', () => {
        it('has a players array', function() {
            expect(myGame.players).toBeArray();
        });
        it('has a uMat (utility matrix)', function() {
            expect(myGame.uMat).toBeObject();
        });
    });
});
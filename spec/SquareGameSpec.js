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
        it('has an options array', function() {
            expect(myGame.options).toBeArray();
        });
    });
    describe('assignGame', () => {
        beforeEach(function() {
            myGame.assignGame();
        });
        it('assigns the current game to each player', function() {
            expect(myGame.players[0].game).toBe(myGame);
        });
        it('assigns player opponents', function() {
            expect(p0.opponent).toBe(p1);
        });
        it('assigns player options', function() {
            expect(p0.options).toEqual(myGame.options[0]);
        });
    });
});
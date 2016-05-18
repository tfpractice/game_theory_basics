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
    describe('validateChoice(player,choice)', () => {
        describe('when choice is part of the players options', () => {
            it('retuns true', function() {
                expect(myGame.validateChoice(p0, 'top')).toBeTrue();
            });
        });
        describe('when choice is not part of the players options', () => {
            it('returns false', function() {
                expect(myGame.validateChoice(p0, 'left')).toBeFalse();
            });
        });
    });
    describe('f0(choice)', () => {
        it('retuns the uMat utility values based on player 0s choice', function() {
            expect(myGame.f0('top')).toBeObject();
        });
    });
    describe('f1(choice)', () => {
        it('retuns the uMat utility values based on player 0s choice', function() {
            expect(myGame.f1('left')).toBeObject();
        });
    });
    describe('contextUtil(player, choice)', () => {
        describe('when choice is part of the players options', () => {
            it('returns an array of strategies based on opponenets choice', function() {
                expect(myGame.contextUtil(p1, 'left')).toBeObject();
            });
        });
        describe('when choice is not part of the players options', () => {
            it('returns null', function() {
                expect(myGame.contextUtil(p1, 'top')).toBeNull();
            });
        });
    });
    describe('playerBest(player)', () => {
        it('returns the specified players bestChoices object', function() {
            expect(myGame.playerBest(p0)).toBeObject();
        });
    });
    describe('bestIncludes', () => {
        describe('when specified strategy is included in players bestChoices', () => {
            it('returns true', function() {
                // expect(myGame.bestIncludes(p0, "left")).toBeTrue();
            });
        });
        describe('when specified strategy is not included in players bestChoices', () => {
            it('returns false', function() {

            });
        });
    });
    describe('getBestResponse', () => {
        it('returns the players best response given a certain context', function() {
            expect(myGame.getBestResponse(p0, "left")).toBeArray();
        });
    });
    describe('bestIncludes(player, choice, oChoice', () => {
        it('compares players best responses to opponent choice and vice versa ', function() {
            myGame.bestIncludes(p0, 'left', 'top');
        });
    });
    describe('singleNash(player, oChoice)', () => {
        it('populates the equilibria array with strategy profiles given a player and opponents choice', function() {
            myGame.singleNash(p0, 'center');
            expect(myGame.equilibria).toContain(['center', 'center']);
        });
    });
    describe('nash', () => {
        it('populates the equilibria array with all possible nash equilibria', function() {
            myGame.nash();
            expect(myGame.equilibria).toContain(['center', 'center']);
        });

    });
});
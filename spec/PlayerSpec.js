describe('Player', () => {
    describe('when playing Prisoners dilemma', () => {
        var myP0, myP1, myDilemma;
        beforeEach(function() {
            myP0 = new Player(0);
            myP1 = new Player(1);
            myDilemma = new Dilemma(myP0, myP1);
        });
        describe('init', () => {
            it('has an ID', function() {
                expect(myP0.id).toBe(0);
            });
            it('has an options array', function() {
                expect(myP0.options).toBeArray();
            });
            it('has a (null)choice object', function() {
                expect(myP0.choice).toBeNull();
            });
            it('has a strict array', function() {
                expect(myP0.strict).toBeArray();
            });
            it('has a weak array', function() {
                expect(myP0.weak).toBeArray();
            });
            it('has a dominated array', function() {
                expect(myP0.dominated).toBeArray();
            });
            it('has a bestChoices array', function() {
                expect(myP0.bestChoices).toBeArray();
            });
            it('has a strategies objects', function() {
                expect(myP0.strategies).toBeObject();
            });
        });
        describe('setOpponent(opp)', () => {
            it('sets the opponent attribute', function() {
                myP0.setOpponent(myP1);
                expect(myP0.opponent).toBe(myP1);
            });
        });
        describe('setOptions', () => {
            it('assigns an array of strategies from the game ', function() {
                expect(myP0.options).toBeArray();
            });
        });
        describe('choose', () => {
            it('assigns the players choice value', function() {
                myP0.choose('defect');
                expect(myP0.choice).toBe(1);
            });
        });
        describe('setGame(currGame)', () => {
            it('assigns Player.game to currGame', function() {
                var g = new Dilemma();
                var newPlayer = new Player(2);
                newPlayer.setGame(g);
                expect(newPlayer.game).toBe(g);
            });
        });
        describe('oppContext(oChoice)', () => {
            it('returns a strategy-utility key-value store', function() {
                expect(myP0.oppContext('defect')).toBeObject();
            });
        });
        describe('contextUtil', () => {
            it('returns an array players payoffs based on opponents choices', function() {
                console.log(myP0.contextUtil('cooperate'));
                expect(myP0.contextUtil('cooperate')).toBeObject();
            });
        });
        describe('bestOptions(oChoice)', () => {
            it('retuns the optimal strategy given an opponents choice', function() {
                expect(myP0.bestOptions("cooperate")).toContain("defect");
            });
        });
        describe('strictDom(option)', () => {
            it('returns true if a strategy always yields a preferable utility ', function() {
                expect(myP0.strictDom('defect', 'cooperate')).toBeTrue();
            });
        });
        describe('preferred(oChoice, choice, alt)', () => {
            it('returns true if choice is preferable to alt given opponents choice', function() {
                expect(myP0.preferred('defect', 'defect', 'cooperate')).toBeTrue();
            });
            it('returns false if strategy choice is not preferable to alt given opponents choice', function() {
                expect(myP0.preferred('defect', 'cooperate', 'defect')).toBeFalse();
            });
        });
    });

    describe('setStrategies', () => {
        it('appends the best option to the bestChoices array', function() {});
    });
    describe('when Playing SquareGame', () => {
        var myGame, p0, p1;
        beforeEach(function() {
            myGame = new SquareGame();
            p0 = myGame.players[0];
            p1 = myGame.players[1];
        });

        describe('setDStrat', () => {
            it('adds dominated strategies to the dominated array', function() {
                expect(p1.dominated).toContain('right');
            });
        });
        describe('altStrat(strat)', () => {
            it('returns an array of strategies excluding that which is provided', function() {
                expect(p0.altStrat('top')).not.toContain('top');
            });
        });

    });
});
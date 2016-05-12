describe('Player', () => {
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
        it('returns a utility array based on opponents potential choice', function() {
            //console.log(myP0.oppContext('cooperate'));

            // expect(myP0.oppContext('cooperate')).toBeArray();
        });
        it('returns a key value store of strategies and utilities', function() {
            expect(myP0.oC('defect')).toBeObject();
        });

    });
    describe('potentialPayoffs', () => {
        it('returns an array players payoffs based on opponents choices', function() {
            //console.log(myP0.potentialPayoffs('cooperate'));
            expect(myP0.potentialPayoffs('cooperate')).toBeArray();
        });
    });
    describe('contextDom(oChoice)', () => {
        it('returns the better option 	given opponents choice', function() {
            //console.log(myP0.contextDom('cooperate'));
            //console.log(myP0.contextDom('defect'));
            expect(myP0.contextDom('cooperate')).toBe('defect');
        });
    });
    describe('strictDom(option)', () => {
        it('returns true if a strategy always yields a preferable utility ', function() {
            expect(myP0.strictDom(0, 1)).toBeTrue();
        });
    });
    describe('conDom(oChoice, choice, alt)', () => {
        it('returns true if choice is preferable to alt whem oppnonent choose context', function() {
            expect(myP0.conDom('defect', 'defect', 'cooperate')).toBeTrue();

        });
        it('returns false if strategy choice preferable to alt when oppnonent choose context', function() {
            expect(myP0.conDom('defect', 'cooperate', 'defect')).toBeFalse();

        });
    });
    describe('SDom', () => {

    });
    describe('setStrategies', () => {
        it('appends the best option to the bestChoices array', function() {
            // myP0.setStrategies();
            // //console.log(myP0.bestChoices);
            // expect(myP0.bestChoices.length).toBe(2);
        });
    });
    describe('oC(oChoice)', () => {
        it('returns a key value store of strategies and utilities', function() {
            expect(myP0.oC('defect')).toBeObject();
        });
    });
    describe('contextUtil(oChoice)', () => {
        it('returns the strategy-payoff key/value store for the player', function() {
            expect(myP0.contextUtil('defect')).toBeObject();
        });
    });
    describe('optimalStrategy(oChoice)', () => {
        it('retuns the optimal strategy given an opponents choice', function() {
            expect(myP0.optimalStrategy('cooperate')).toBe('defect');
        });
    });
});
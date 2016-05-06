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
    describe('oppContext(choice)', () => {
        it('returns a utility array based on opponents potential choice', function() {
            console.log(myP0.oppContext(0));
            expect(myP0.oppContext(0)).toBeArray();
        });

    });
    describe('potentialPayoffs', () => {
        it('returns an array players payoffs based on opponents choices', function() {
            // myP0.potentialPayoffs(0);
            console.log(myP0.potentialPayoffs(0));
            expect(myP0.potentialPayoffs(0)).toBeArray();
        });
    });
    describe('contextDom(oChoice)', () => {
        it('returns the better option 	given opponents choice', function() {
            console.log(myP0.contextDom(0));
            expect(myP0.contextDom(0)).toBe('defect');
        });
    });
});
describe('Dilemma', () => {
    var myDilemma, p0, p1;
    beforeEach(function() {
        myDilemma = new Dilemma();
        p0 = myDilemma.players[0];
        p1 = myDilemma.players[1];
    });
    describe('init', () => {
        it('has a players array', function() {
            expect(myDilemma.players).toBeArray();
        });
        it('has a uMat (utility matrix)', function() {
            expect(myDilemma.uMat).toBeObject();
        });
    });
    describe('assignDilemma', () => {
        it('assigns the current dilemma to each player', function() {
            myDilemma.assignDilemma();
            expect(myDilemma.players[0].game).toBe(myDilemma);
        });
    });
    describe('cIndex(choice)', () => {
        it('retuns the index of the choice', function() {
            expect(myDilemma.cIndex(p0, 'cooperate')).toBe(0);
        });
    });
    describe('f0(choice)', () => {
        it('retuns the uMat utility values based on player 0s choice', function() {
            expect(myDilemma.f0('defect')).toBeObject();
        });
    });
    describe('f1(choice)', () => {
        it('filters the uMat based on player 1s choice ', function() {
            expect(myDilemma.f1('defect')).toBeObject();
        });
    });

    describe('contextUtil(player, choice)', () => {
        it('returns an array of strategies based on opponenets choice', function() {
            expect(myDilemma.contextUtil(p1, 'defect')).toBeObject();
        });
    });
    describe('dominates(player, choice, altChoice, opponent, opponentChoice)', () => {
        it('returns whether or not one strategy yields preferable results', function() {
            expect(myDilemma.dominates(p0, 'defect', 'cooperate', p1, 'defect')).toBeTrue();
        });
    });
    describe('strictDominates()', () => {
        it('retuns whether or not one strategy yeilds preferable result despite opponent choice', function() {
            expect(myDilemma.strictDominates(p0, 'defect', 'cooperate', p1)).toBeTrue();
        });
    });


});
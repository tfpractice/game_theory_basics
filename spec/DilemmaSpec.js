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
        it('has a utility matrix', function() {
            expect(myDilemma.utility).toBeArray();
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
            // var p0 = myDilemma.players[0];
            expect(myDilemma.cIndex('cooperate')).toBe(0);
        });
    });
    describe('p0Filter(choice)', () => {
        it('returns utilities array based on p0s(row) choice index ', function() {
            // //console.log(myDilemma.p0Filter(1));
            expect(myDilemma.p0Filter('cooperate')).toBeArray();
        });
    });
    describe('p1Filter(choice)', () => {
        it('returns utilities array based on p1s(column) choice index ', function() {
            expect(myDilemma.p1Filter('cooperate')).toBeArray();
        });
    });
    describe('playerChoiceFilter(player, choice)', () => {
        it('returns the proper utility based on the given player and choice', function() {
            expect(myDilemma.playerChoiceFilter(0, 'defect')).toBeArray();
        });
    });
    describe('dominates(player, choice, altChoice, opponent, opponentChoice)', () => {
        it('returns whether or not one strategy yields preferable results', function() {
            expect(myDilemma.dominates(0, 'defect', 'cooperate', 1, 'defect')).toBeTrue();
        });
    });
    describe('strictDominates()', () => {
        it('retuns whether or not one strategy yeilds preferable result despite opponent choice', function() {
            expect(myDilemma.strictDominates(0, 'defect', 'cooperate', 1)).toBeTrue();
        });

    });
    describe('uMat', () => {
        it('is a labeled matirx of utilities', function() {
            expect(myDilemma.uMat).toBeObject();
        });
    });
    describe('f0(choice)', () => {
        it('retuns the uMat utility values based on player0s choice', function() {
            console.log('f0')
            console.log(myDilemma.f0('defect'));

            expect(myDilemma.f0('defect')).toBeObject();
        });
    });
    describe('f1(choice)', () => {
        it('filters the uMat based on player 1s choice ', function() {
            console.log('f1');
            console.log(myDilemma.f1('defect'));
            expect(myDilemma.f1('defect')).toBeObject();

        });
    });
});
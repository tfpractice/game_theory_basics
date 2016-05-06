describe('Dilemma', () => {
    var myDilemma;
    beforeEach(function() {
        myDilemma = new Dilemma();
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
    describe('p0Filter(cIndex)', () => {
        it('returns utilities array based on p0s(row) choice index ', function() {
            // console.log(myDilemma.p0Filter(1));
            expect(myDilemma.p0Filter(0)).toBeArray();
        });
    });
    describe('p1Filter(cIndex)', () => {
        it('returns utilities array based on p1s(column) choice index ', function() {
            expect(myDilemma.p1Filter(0)).toBeArray();
        });
    });
    describe('playerChoiceFilter(pIndex, cIndex)', () => {
        it('returns the proper utility based on the given player and choice', function() {
            expect(myDilemma.playerChoiceFilter(0, 1)).toBeArray();
        });
    });
    describe('dominates(player, choice, altChoice, opponent, opponentChoice)', () => {
        it('returns whether or not one strategy yields preferable results', function() {
            expect(myDilemma.dominates(0, 1, 0, 1, 1)).toBeTrue();
        });
    });
    describe('strictDominates()', () => {
        it('retuns whether or not one strategy yeilds preferable result despite opponent choice', function() {
            expect(myDilemma.strictDominates(0, 1, 0, 1)).toBeTrue();

        });

    });
});
describe('Dilemma', () => {
    var myDilemma = new Dilemma();
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
        it('returns an array of utilities based on p0s choice index ', function() {
            expect(myDilemma.p0Filter(0)).toBeArray();
        });
    });
});
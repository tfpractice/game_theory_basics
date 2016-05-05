describe('Dilemma', () => {
    var myDilemma = new Dilemma();
    describe('init', () => {
        it('has a players array', function() {
            expect(myDilemma.players).toBeArray();
        });
        it('has a Payoffs matrix', function() {
            expect(myDilemma.payoffs).toBeArray();
        });
    });
});
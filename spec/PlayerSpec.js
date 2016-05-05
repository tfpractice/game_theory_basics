describe('Player', () => {
    var myP1 = new Player();
    describe('init', () => {
        it('has an options array', function() {
            expect(myP1.options).toBeArray();

        });
        it('has a (null)choice object', function() {
            expect(myP1.choice).toBeNull();

        });
    });
    describe('choose', () => {
        it('assigns the players choice value', function() {
            myP1.choose('defect');
            expect(myP1.choice).toBe('defect');
        });
    });
});
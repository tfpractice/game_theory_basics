describe('Player', () => {
    var myP0 = new Player();
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
    describe('choose', () => {
        it('assigns the players choice value', function() {
            myP0.choose('defect');
            expect(myP0.choice).toBe(1);
        });
    });
});
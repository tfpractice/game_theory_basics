describe('Player', () => {
    var myP1 = new Player();
    describe('init', () => {
        it('has an options array', function() {
            expect(myP1.options).toBeArray();

        });
    });

});
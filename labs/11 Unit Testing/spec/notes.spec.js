describe('notes module', function () {
    it('should be able to add a new note');
    it('should ignore blank notes');
    it('should ignore notes containing only whitespace');
    it('should require a string parameter');
});
it("should be able to add a new note", function () {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
});
/*
describe('notes module', function () {
    it('should be able to add a new note');
    it('should ignore blank notes');
    it('should ignore notes containing only whitespace');
    it('should require a string parameter');
});
it("should be able to add a new note", function () {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
});
it("should ignore blank notes", function () {
    expect(notes.add('')).toBe(false);
    expect(notes.count()).toBe(5);
});
*/

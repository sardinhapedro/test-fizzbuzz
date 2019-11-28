describe("FizzBuzzChecker", function() {
  
  let array = []
  
    beforeEach(function() {
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30, 31, 32, 35, 90]
    });
  
    it("check array for multiples of 3 or containing 3 and replace with 'fizz' or 'fizzfizz' if both criteria are met", function() {

      checkFizz(array)
      expect(array).toEqual([1, 2, 'fizzfizz', 4, 5, 'fizz', 7, 8, 'fizz', 10, 11, 'fizz', 'fizz', 14, 'fizz', 'fizzfizz', 'fizz','fizz','fizz','fizz'])
    });

    it("check array for multiples of 5 or containing 5 and replace with 'buzz' or 'buzzbuzz' if both criteria are met", function() {

      checkBuzz(array)
      expect(array).toEqual([1, 2, 3, 4, 'buzzbuzz', 6, 7, 8, 9, 'buzz', 11, 12, 13, 14,'buzzbuzz', 'buzz', 31,32,'buzzbuzz','buzz'])
    });

    it("check array if number is multiple of 3 and 5 and replace with 'fizzbuzz'", function() {

      checkFizzBuzz(array)
      expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,'fizzbuzz', 'fizzbuzz', 31, 32, 35, 'fizzbuzz'])
    });

    it("check array if number is multiple of 3 and 5 and contains either a 3 or a 5", function() {

      checkLucky(array)
      expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,'lucky', 'lucky', 31, 32, 35, 90])
    });
  
  });
  
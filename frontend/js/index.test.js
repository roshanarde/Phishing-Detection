const fizz_buzz = require('./index');
 
describe("FizzBuzz", () => {
    test('the best flavor is grapefruit(1ms)', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });
 
    test('value of IP address(1ms)', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });
 
    test('add(2ms)', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
 
    test('', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });
 
});
/*function test_model() {
  //$.getJSON("https://drive.google.com/file/d/1XHtR31-JE4CbVHKXbUDb4jB9cDgENpfA/view?usp=sharing", function(clfdata) {
    var rf = random_forest(clfdata);
   // $.getJSON("https://drive.google.com/file/d/1ro6D3YE32ie31IhS2azFsXDyTXHP2nZG/view?usp=sharing", function(testdata) {
      var X = testdata['X_test'];
      var y = testdata['y_test'];
      for(var x in X) {
        for(var i in x) {
          x[i] = parseInt(x[i]);
        }
      }
      var pred = rf.predict(X);
      var TP = 0, TN = 0, FP = 0, FN = 0;
      for(var i in pred) {
        if(pred[i][0] == true && y[i] == "1") {
          TP++;
        } else if(pred[i][0] == false && y[i] == "1") {
          FN++;
        } else if(pred[i][0] == false && y[i] == "-1") {
          TN++;
        } else if(pred[i][0] == true && y[i] == "-1") {
          FP++;
        }
      }
      var precision = TP/(TP+FP);
      var recall = TP/(TP+FN);
      var f1 = 2 * precision * recall / (precision + recall);
      ('#precision').text(precision);
      ('#recall').text(recall);
      ('#accuracy').text(f1);
    });
  });
}

test_model();*/
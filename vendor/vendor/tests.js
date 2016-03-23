var assert = chai.assert;

suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F to C = 0C', function() {
        original.value = "32F to C";
        main();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
});

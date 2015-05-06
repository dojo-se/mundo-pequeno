var assert = require('assert');
var hello = require('../src/hello');

describe('mundo_pequeno', function(){
	it('deveria retornar o ponto atual', function() {
		var p = new hello.Ponto(1,1);
		assert.equal(p.toString(),'(1,1)');
	});
	it('deveria retornar os proximos pontos', function() {
		var proximos = [
			new hello.Ponto(1,1),
			new hello.Ponto(1,2),
			new hello.Ponto(2,1)
		];

		assert.equal(proximos.toString(),'(1,1),(1,2),(2,1)');
	});

});

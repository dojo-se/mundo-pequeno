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

	it('amigos obvios', function() {
		var amigos = [
			new hello.Ponto(1,2),
			new hello.Ponto(1,3),
			new hello.Ponto(2,1)
		];
		var eu = new hello.Ponto(1,1);
		var proximos = hello.mundo_pequeno(eu, amigos);
		assert.equal(proximos.toString(), '(1,2),(1,3),(2,1)');
	});

	it('quantidade maxima 3 amigos proximos', function(){
			var outros = [
				new hello.Ponto(2,2),
				new hello.Ponto(2,3),
				new hello.Ponto(2,4),
				new hello.Ponto(9,5),
			]
			var eu = new hello.Ponto(1,1);
			var proximos = hello.mundo_pequeno(eu, outros);

			assert.equal(proximos.length, 3);
	});

	it('amigos mais proximos', function() {
		var outros = [
			new hello.Ponto(2,2),
			new hello.Ponto(2,3),
			new hello.Ponto(2,4),
			new hello.Ponto(9,5),
			new hello.Ponto(19,50),
			new hello.Ponto(90,55)
		];
		var eu = new hello.Ponto(1,1);
		var proximos = hello.mundo_pequeno(eu, outros);
		assert.equal(proximos.toString(), '(2,2),(2,3),(2,4)');
	});
});

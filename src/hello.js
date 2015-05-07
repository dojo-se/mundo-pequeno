var Ponto = function(x, y) {
	this.x = x;
	this.y = y;

	this.toString = function() {
		return '(' + this.x + ',' + this.y + ')';
	}

	return this;
}

function mundo_pequeno(ponto_atual,outros_pontos) {
	var pontos_com_distancia = outros_pontos.map(function(ponto){
		var dx = Math.pow(ponto_atual.x - ponto.x,2);
		var dy = Math.pow(ponto_atual.y - ponto.y,2);
		return {'distancia' : Math.sqrt(dx + dy),
		 				'ponto' : ponto};
	});

	pontos_ordenados = pontos_com_distancia.sort(function(p1,p2){
		return p1.distancia - p2.distancia;
	})

	var amigos_proximos = pontos_ordenados.slice(0,3);

	// Pequena gambi
	return amigos_proximos.map(function(ponto_com_distancia){
		return ponto_com_distancia.ponto;
	});
}

module.exports.mundo_pequeno = mundo_pequeno;
module.exports.Ponto = Ponto;

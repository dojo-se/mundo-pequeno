var Ponto = function(x, y) {
	this.x = x;
	this.y = y;

	this.toString = function() {
		return '(' + this.x + ',' + this.y + ')';
	}

	this.distanciaPara = function(ponto) {
		var dx = Math.pow(this.x - ponto.x,2);
		var dy = Math.pow(this.y - ponto.y,2);
		return Math.sqrt(dx + dy);
	}

	return this;
}

function mundo_pequeno(ponto_atual,outros_pontos) {
	pontos_ordenados = outros_pontos.sort(function(p1,p2){
		return p1.distanciaPara(ponto_atual) - p2.distanciaPara(ponto_atual);
	});

	return pontos_ordenados.slice(0,3);
}

module.exports.mundo_pequeno = mundo_pequeno;
module.exports.Ponto = Ponto;

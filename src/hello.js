var Ponto = function(x, y) {
	this.x = x;
	this.y = y;

	this.toString = function() {
		return '(' + this.x + ',' + this.y + ')';
	}

	return this;
}

function mundo_pequeno(ponto_atual,outros_pontos) {
	return outros_pontos.slice(0,3);
}

module.exports.mundo_pequeno = mundo_pequeno;
module.exports.Ponto = Ponto;

$(document).ready(function(){
	$("#enviar").click(function(){
		const tazaSantander = 10
		const tazaItau = 11
		const tazaFrances = 12	
		let bancos = $("#bancos option:selected").val();
		plazo = $("#plazos option:selected").val() / 30;

		if (bancos == "santander") {
			
			funcionFinal(tazaSantander);

		}if(bancos == "itau"){

			funcionFinal(tazaItau);

		}if(bancos == "frances"){

			funcionFinal(tazaFrances);

		}
	});
	var plazo;
	var	monto = $("#monto").val();
	function funcionFinal(taza){
		let resultadoTaza = taza/monto*100*plazo
		let montoTotal = parseInt(resultadoTaza) + parseInt(monto);
		$("#resultadoTaza").html(resultadoTaza);
		$("#montoTotal").html(montoTotal);
		$("#taza").html(taza);
	}
});
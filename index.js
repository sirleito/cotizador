$(document).ready(function(){
	const tazaSantander = 10
	const tazaItau = 11
	const tazaFrances = 12
	
	class clase{
		constructor(b, t){
			this.banco = b;
			this.taza = t;
		}
		cliquear(){
			let plazo = $("#plazos option:selected").val()
			let	monto = $("#monto").val();
			let resultadoTaza = this.taza/monto*100*plazo
			let montoTotal = Number(resultadoTaza) + Number(monto);
			$("#resultadoTaza").html(resultadoTaza);
			$("#montoTotal").html(montoTotal);
			$("#taza").html(this.taza);
			$("#nombreBanco").html(this.banco);
			$("#form").preventDefault();
		}		
	}

	const bancos = [
		new clase("Santander", 10),
		new clase("Credicoop", 12),
		new clase("Francés", 15),
	]

	$("#form").submit(function(e){

	     e.preventDefault();

	 });

	$("#enviar").click(function(){
		let bancosInput = $("#bancos option:selected").val();
		bancos[bancosInput].cliquear();
	});
	
	$("#monto").keydown(function(t){	
		if (t.keyCode === 13){
			let bancosInput = $("#bancos option:selected").val();
			bancos[bancosInput].cliquear();
			}
	})

});

$(document).ready(function(){

	$("#formulario").validate({
		rules:{
			nombre:{ 
				required: true, 
			},
			apellido : { 
				required: true, 
			},
			email:{ 
				required: true, 
			},
			checkbox:{
				required: true,
			},
		},
		messages:{
			nombre:{ 
				required:"Debe introducir su nombre." ,
				},
			apellido:{ 
				required:"Debe introducir su apellido." ,
				},
			email:{ 
				required:"Debe introducir su email." ,
				},
			checkbox:{
				required:"Debe aceptar los términos para continuar",
			}
		},
	});
	$("#btn-next-usuario").on("click",function(){
		$("#formulario").submit();

	});

	
});








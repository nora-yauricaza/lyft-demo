
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
			}
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
			},
		});
	$("#btn-next-usuario").on("click",function(){
		$("#formulario").submit();

	});

	
});

$(document).ready(function(){
	$(".load").fadeOut(3000);

	$("#ingresarNum").validate({
		rules:{
			digitos:{ 
				required: true, 
				maxlength: 9,
				minlength:9,
				digits: true
			}
		},
		menssage:{
			digitos:{ 
				required:"El campo es requerido" , 
				maxlength: "Ingrese 9 digitos",
				digits: "solo numeros"
				},
			},
		});
	
		$("#btn-next").on("click",function(){
			
		if ($('#ingresarNum').validate()) {
        	var messages = Math.floor(( Math.random() * 1000)+1);
        	alert("LAB:" + messages);
        	var digitos =  $('#digitos').validate();
        	$("#ingresarNum").submit();	    
    	}
    });
	$("#btn-next").on("click",function(){
		$("#ingresarNum").submit();
	});
	
});

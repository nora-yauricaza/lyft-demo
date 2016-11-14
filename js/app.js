// $(document).ready(function() {
//    $(".load").fadeOut(3000);


// 	// $("#ingresarNum").keypress(tecla);

// 	// function tecla(e){
// 	// 	var tecla = e.keyCode;
// 	// 	if((tecla >= 48 && tecla <= 57) || tecla == 8){
// 	// 		$("#btn-next").removeAttr("disabled");
//  //            $("#btn-next").attr("href", "codigo.html");
// 	// 		return true;
// 	// 	}
// 	// 	else {
// 	// 		$("#ingresarNum").attr("disabled");
//  //            $("#btn-next").removeAttr("href");
// 	// 		return false;
// 	// 	}
// 	// }
// });

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
		$("#ingresarNum").submit();
	});
	
});

 $(document).ready(function(){
//VALIDAR CAMPOS INPUTS
    
//VALIDAR CHECKBOX DE CONFIRMAÇÃO
   $("#checkAceito").click(function(){
        if($(this).is(":checked")){
        //Enable the submit button.
        $("#primeiro").attr("disabled",false);
    } else{
        //If it is not checked, disable the button.
        $('#primeiro').attr("disabled",true);
    }
    
    
    });
// VALIDAR CAMPO IDADE 
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$("#resultForm").validate({
    rules:{
        idade:{
            required: true,
            max:100,
            min:1
        }       
          
    }
    
});
$("#enviaForm").click(function(){
    if ($("#resultForm").valid() == true) {
        $("#enviaForm").hide();
        $("#idade").attr("disabled",true);
        $("#segundo").removeAttr("hidden");
     
    }else{
        $.notify("Preencha todos os campos", "error")
    }

});
//FUNCAO VALIDAR EMAIL
$( "#emailForm" ).validate({
  rules: {
    email_input: {
      required: true,
      email: true
    }
  }
    });
 });
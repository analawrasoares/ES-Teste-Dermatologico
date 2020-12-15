$(document).ready(function(){

var valor;
var c=0;
var timer;
var tipo;
var respostas = [];
var perguntas = ["1. Qual é o seu grau de Incontinência de melanina? ",
                 "2. Qual é o seu grau Infiltrado eosinofílico? ",
                 "3. Qual é o seu grau Hanseníase neural primária? ",
                 "4. Qual é o seu grau de Fibrose da derme papilar?",
                 "5. Qual é o seu grau Exocitose?",
                 "6. Qual é o seu grau de Acantose?",
                 "7. Qual é o seu grau Hiperceratose?",
                 "8. Qual é o seu grau de Paraqueratose?",
                 "9. Qual é o seu grau de Hipocratismo da epiderme? ",
                 "10. Qual é o seu grau de Alongamento da epiderme?",
                 "11. Qual é o seu grau de Afinamento da epiderme suprapapilar?",
                 "12. Qual é o seu grau de Pústula espongiforme?",
                 "13. Qual é o seu grau de Munro microabscess? ",
                 "14. Qual é o seu grau de Hipergranulose focal?",
                 "15. Qual é o seu grau de Desaparecimento da camada granular?",
                 "16. Qual é o seu grau de Vacuolização e danos da camada basal?",
                 "17. Qual é o seu grau de Espongiose?",
                 "18. Qual é o seu grau de Aparencia de dentes serrados da epiderme ?",
                 "19. Qual é o seu grau de Folicular chifres cutâneos?",
                 "20. Qual é o seu grau de Paraqueratose perifolicular?",
                 "21. Qual é o seu grau de Inflamatório mononuclear?",
                 "22. Qual é o seu grau de inflamatório em banda infiltrado?"];

 //CONFIGURACAO DE PRIMEIROS BOTOES   
    
    
 $("#primeiro").click(function(){
        $("#quiz1").hide();
        $("#btnVoltar").hide();
        $("#enviaForm").removeAttr("hidden");
        
    });
    
//FIM
    
    $("#pergunta").html(perguntas[c]);
    
  // CONFIGURACAO DOS BOTOES DAS PERGUNTAS 
    
    $("#btn-0").click(function(){
        valor = 0;
        $("#btn-next").removeAttr("disabled");
    
    
    });
   
    
    $("#btn-1").click(function(){
        valor = 1;
        $("#btn-next").removeAttr("disabled");
    
    
    });
    $("#btn-2").click(function(){
        valor = 2;
        $("#btn-next").removeAttr("disabled");
    
    
    });
    $("#btn-3").click(function(){
        valor = 3;
        $("#btn-next").removeAttr("disabled");
    
    
    });
    
 //CONFIGURACAO DO BOTAO PROXIMO 
    $("#btn-next").click(function(){
       respostas.push(valor);
        c++;
       $("#pergunta").html(perguntas[c]);
       $("#btn-next").attr("disabled","disabled");
        
        if(c == 22){
       $("#quiz2").hide(); 
       $("#result").removeAttr("hidden");         

    }
    });
    
//FUNCAO PARA CALCULAR O RESULTADO DO QUESTIONARIOS   
    
   function CalcResultado(){
       
   if(((respostas[8]== 1) || (respostas[8] == 2) || (respostas[8] == 3)) && ((respostas[10]== 1) || (respostas[10] == 2) || (respostas[10] == 3)) ){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
        tipo = "100% de chances de ter Psoríase";
       
   }else if((respostas[0]==0) && (respostas[1]==0) && (respostas[2]==0) && (respostas[3]==0) && (respostas[4]==0) && (respostas[5]==0) && (respostas[6]==0) && (respostas[7]==0) && (respostas[8]==0) && (respostas[9]==0) && (respostas[10]==0) && (respostas[11]==0) &&(respostas[12]==0) &&(respostas[13]==0) &&(respostas[14]==0) &&(respostas[15]==0) &&(respostas[16]==0) &&(respostas[17]==0) &&(respostas[18]==0) &&(respostas[19]==0) &&(respostas[20]==0)){
     $("#answer").append("De acordo com a mineração de dados realizada, <b>você não possui nenhuma doença dermatológica</b>");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        tipo = "Não identificado";
    
    }else if(((respostas[8]== 1) || (respostas[8] == 2) || (respostas[8] == 3)) && (respostas[10]== 0) && ((respostas[11] == 2) || (respostas[11] == 3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
        tipo = "100% de chances de ter Psoríase";
       
    }else if(((respostas[8]== 1) || (respostas[8] == 2) || (respostas[8] == 3)) && (respostas[10]== 0) && ((respostas[11] == 0) || (respostas[11] == 1))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 50% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
        tipo = "50% de chances de ter Dermatite crônica";
        
    }else if((respostas[8]== 0) && ((respostas[15]== 1) || (respostas[15] == 2) || (respostas[15] == 3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter  Lichen planus</b>'. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
        tipo = "100% de chances de ter  Lichen planus";
    }else if((respostas[8]== 0) && (respostas[15]== 0) && ((respostas[3] ==1 ) || (respostas[3] ==2) || (respostas[3]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Dermatite crônica";
    }else if((respostas[8]== 0) && (respostas[15]== 0) && (respostas[3] == 0) && ((respostas[19] ==1) || (respostas[19] ==2) || (respostas[19]==3))){
     $("#answer").append("De acordo com o teste dermatológico <b>você tem 92,9% de chances de ter Pitiríase rubra pilar</b>. Sugerimos que voce procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "92,9% de chances de ter Pitiríase rubra pilar";
    
    }else if((respostas[8]== 0) && (respostas[15]== 0) && (respostas[3] == 0) && (respostas[19] ==0) && (respostas[2]==0) && ((respostas[9]==1) ||(respostas[9] ==2) || (respostas[9]==3))){
     $("#answer").append("De acordo com o teste dermatológico <b>você tem 100% de chances de ter Dermatite sebórica</b>. Sugerimos que voce procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
    
        tipo = "100% de chances de ter Dermatite sebórica";
    }else if((respostas[8]== 0) && (respostas[15]== 0) && (respostas[3] == 0) && (respostas[19] ==0) && (respostas[2]==0) && (respostas[9] ==0) && ((respostas[20]==0) || (respostas[20] ==1)) && (respostas[7]==0)){
     $("#answer").append("De acordo com o teste dermatológico <b>você tem 100% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
    
        tipo = "100% de chances de ter Dermatite sebórica";
    }else if((respostas[8]== 0) && (respostas[15]== 0) && ((respostas[3] == 1) || (respostas[3]==2) || (respostas[3]==3)) && (respostas[19] ==0) && (respostas[2]==0) && (respostas[9] ==0) && ((respostas[20]==0) || (respostas[20] ==1)) && ((respostas[7]==1) ||(respostas[7]==2)|| (respostas[7]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 87,5% de chances de ter Pitiríase rósea</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "87,5% de chances de ter Pitiríase rósea";
    
    }else if((respostas[8]== 0) && (respostas[15]== 0) && ((respostas[3] == 1) || (respostas[3]==2) || (respostas[3]==3)) && (respostas[19] ==0) && (respostas[2]==0) && (respostas[9] ==0) && (respostas[20]==2)){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Pitiríase rósea</b>, sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Pitiríase rósea";
    
    }else if((respostas[8]== 0) && (respostas[15]== 0) && ((respostas[3] == 1) || (respostas[3]==2) || (respostas[3]==3)) && (respostas[19] ==0) && (respostas[2]==0) && (respostas[9] ==0) && (respostas[20]==3)){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que voce procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
    
        tipo = "60% de chances de ter Dermatite sebórica";
    }else if((respostas[8]== 0) && ((respostas[10]==2)||(respostas[10]==3)) && (respostas[15]== 0) && ((respostas[3] == 1) || (respostas[3]==2) || (respostas[3]==3)) && (respostas[19] ==0) && ((respostas[2]==1) || (respostas[2] ==2) || (respostas[2]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que voce procure um médico especialitas");
    $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Psoríase";
    
    }else if((respostas[8]== 0) && (respostas[15]==0) &&(respostas[3]==0) && (respostas[19]==0) && ((respostas[2]==1) || (respostas[2]==2) && (respostas[2]==3)) && ((respostas[10]==0) || (respostas[10]==1)) && ((respostas[14]==1) || (respostas[14]==2) || (respostas[14]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Pitiríase rósea</b>. Sugerimos que voce procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
    
        tipo = "100% de chances de ter Pitiríase rósea";
    }else if((respostas[8]== 0) && (respostas[15]==0) && (respostas[3]==0) && (respostas[19]==0) && ((respostas[2]==1) || (respostas[2]==2) || (respostas[2]==3)) && ((respostas[10]==0) || (respostas[10]==1)) && (respostas[14]==0) && ((respostas[16]==2) || (respostas[16]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Dermatite sebórica";
    
    }else if((respostas[8]== 0) && (respostas[15]==0) && (respostas[3]==0) && (respostas[19]==0) && ((respostas[2]==1) || (respostas[2]==2)|| (respostas[2]==3)) && ((respostas[10]==0) || (respostas[10]==1)) && (respostas[14]==0) && ((respostas[4]==0) ||(respostas[4]==1))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 66,7% de chances de ter Pitiríase rósea</b>. Sugerimos que voce procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        tipo = "66,7% de chances de ter Pitiríase rósea";
    }else if((respostas[8]== 0) && (respostas[15]==0) && (respostas[3]==0) && (respostas[19]==0) && ((respostas[2]==1) || (respostas[2]==2)|| (respostas[2]==3)) && ((respostas[10]==0) || (respostas[10]==1)) && (respostas[14]==0) && ((respostas[4]==2) ||(respostas[4]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Dermatite sebórica";
    
    }else{
        console.log("erro");   
    }
   }
    
//SALVAR NO FIREBASE
function salvar(){    
    var idade = document.getElementById("idade").value;
    var radio = $('input:radio:checked').val();
    
    
    
     var obj={
        idade:idade, 
        Resultado:tipo,
        HistoricoNaFamilia:radio, 
        respostas:respostas
       };
//SALVA O OBJETO NA REFERÊNCIA DENTRO DO REF()
  firebase.database().ref("Dados/Historico").push().set(obj)
     //CASO SALVE COM SUCEESO FAZ O QUE TA DENTRO DO THEN
     
    .then(function (){
        console.log("salvou");            
    })
     //SE DEU ERRO NA HORA DE SALVAR FAZ O QUE TA DENTRO DO CATCH
     .catch(erro=>{
      console.log(erro)
    });


}
// FUNCAO PARA MOSTRAR RESULTADO    
    $("#resultado1").click(function(){
        $("#resultado1").attr('disabled', 'disabled');
        
        $("#resultado1").append("<span id='spinner' class='spinner-border spinner-border-sm'></span>")
        
         timer = setTimeout(CalcResultado, 3000);
         timer = setTimeout(salvar, 3000); 
 
});
//FUNCAO PARA ENVIAR EMAIL
    $("#enviarEmail").click(function(){
if ($("#emailForm").valid() == true) {
        
    

                Email.send({
                Host: "smtp.gmail.com",
                Username : "estestederm@gmail.com",
                Password : "Nao3ntr42395",
                To : $("#email_input").val(),
                From : "estestederm@gmail.com",
                Subject : "Resultado do Teste Dermatológico ES",
                Body : "O seu resultado é : "+ tipo +". Sugerimos que você procure um médico especialisata para confirmar o diagnóstico."
                
                }).then(
                    $.notify("Email enviado com sucessos!", "success")

                ).catch(erro =>$.notify
                       ("Houve um erro","error"));
} else {
        $.notify("Preencha o campo corretamente", "error")
    }
    
});
        

});

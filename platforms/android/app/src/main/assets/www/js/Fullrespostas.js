$(document).ready(function(){
    

var valor;
var c=0;
var tipo;
var timer;
var respostas = [];
var perguntas = ["1. Qual é o seu grau de Eritema?",
                 "2. Qual é o seu grau de Descamação da pele?",
                 "3. Qual é o seu grau de Definição de bordas da epiderme?",
                 "4. Qual é o seu grau de Coceira?",
                 "5. Qual é o seu grau de Fenômeno de Koebner?",
                 "6. Qual é o seu grau de Pápulas poligonais",
                 "7. Qual é o seu grau de Pápulas foliculares?",
                 "8. Qual é o seu grau de Envolvimento da mucosa oral?", 
                 "9. Qual é o seu grau de Envolvimento do joelho e cotovelo?",
                 "10. Qual é o seu grau de no Envolvimento do couro cabeludo?",
                 "11. Qual é o seu grau de Incontinência de melanina? ",
                 "12. Qual é o seu grau de Infiltrado eosinofílico? ",
                 "13. Qual é o seu grau de Hanseníase neural primária? ",
                 "14. Qual é o seu grau de Fibrose da derme papilar?",
                 "15. Qual é o seu grau de Exocitose?",
                 "16. Qual é o seu grau de Acantose?",
                 "17. Qual é o seu grau de Hiperceratose?",
                 "18. Qual é o seu grau de Paraqueratose?",
                 "19. Qual é o seu grau de Hipocratismo da epiderme? ",
                 "20. Qual é o seu grau de Alongamento da epiderme?",
                 "21. Qual é o seu grau de Afinamento da epiderme suprapapilar?",
                 "22. Qual é o seu grau de Pústula espongiforme?",
                 "23. Qual é o seu grau de Munro microabscess? ",
                 "24. Qual é o seu grau de Hipergranulose focal?",
                 "25. Qual é o seu grau de Desaparecimento da camada granular?",
                 "26. Qual é o seu grau de Vacuolização e danos da camada basal?",
                 "27. Qual é o seu grau de Espongiose?",
                 "28. Qual é o seu grau de Aparencia de dentes serrados da epiderme  ?",
                 "29. Qual é o seu grau de Folicular chifres cutâneos?",
                 "30. Qual é o seu grau de Paraqueratose perifolicular?",
                 "31. Qual é o seu grau de Flamatório mononuclear?",
                 "32. Qual é o seu grau de Filtrado inflamatório em banda?"];
    
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
        
        if(c == 31){
       $("#quiz2").hide(); 
       $("#result").removeAttr("hidden");          

    }
    });

//FUNCAO PARA CALCULAR O RESULTADO DO QUESTIONARIOS    
    function CalcResultado(){
       
   if(((respostas[18]== 1) || (respostas[18] == 2) || (respostas[18] == 3)) && ((respostas[20]== 1) || (respostas[20] == 2) || (respostas[20] == 3)) ){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase.</b> Sugerimos que voce procure um médico especialitas"); 
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
       tipo = "100% de chances de ter Psoríase";
       
   }else if((respostas[0]==0) && (respostas[1]==0) && (respostas[2]==0) && (respostas[3]==0) && (respostas[4]==0) && (respostas[5]==0) && (respostas[6]==0) && (respostas[7]==0) && (respostas[8]==0) && (respostas[9]==0) && (respostas[10]==0) && (respostas[11]==0) &&(respostas[12]==0) &&(respostas[13]==0) &&(respostas[14]==0) &&(respostas[15]==0) &&(respostas[16]==0) &&(respostas[17]==0) &&(respostas[18]==0) &&(respostas[19]==0) &&(respostas[20]==0) &&(respostas[21]==0)&&(respostas[22]==0)&&(respostas[23]==0)&&(respostas[24]==0)&&(respostas[25]==0)&&(respostas[26]==0)&&(respostas[27]==0)&&(respostas[28]==0)&&(respostas[29]==0)&&(respostas[30]==0)){
     $("#answer").append("De acordo com o teste dermatologico <b>você não possui nenhuma doença dermatológica</b>.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "Não identificado";
    
    }else if(((respostas[18]== 1) || (respostas[18] == 2) || (respostas[18] == 3)) && (respostas[20]== 0) && ((respostas[21] == 0) || (respostas[21] == 1))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 50% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
       
       tipo = "50% de chances de ter Dermatite crônica";
       
    }else if(((respostas[18]== 1) || (respostas[18] == 2) || (respostas[18] == 3)) && (respostas[20]== 0) && ((respostas[21] == 0) || (respostas[21] == 1))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas"); 
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        
        tipo = "100% de chances de ter Psoríase";
       
    }else if((respostas[18]== 0) && ((respostas[25]== 1) || (respostas[25] == 2) || (respostas[25] == 3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter  Lichen planus</b>. Sugerimos que voce procure um médico especialitas");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de chances de ter  Lichen planus";
       
    }else if((respostas[18]== 0) && (respostas[25]== 0) && ((respostas[13] ==1 ) || (respostas[13] ==2) || (respostas[13]==3))){
    $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas");     
    $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Dermatite crônica";
        
    }else if((respostas[18]== 0) && (respostas[25]== 0) && (respostas[13] == 0) && ((respostas[4] ==1) || (respostas[4] ==2) || (respostas[4]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 96,9% de chances de ter Pitiríase rubra pilar</b>.  Sugerimos que voce procure um médico especialitas");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
    
        tipo = "96,9% de chances de ter Pitiríase rubra pilar";
    }else if((respostas[18]== 0) && (respostas[25]== 0) && (respostas[13] == 0) && (respostas[4] ==0) && ((respostas[6]==2) || (respostas[6] ==3))){
    $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Pitiríase rubra pilar</b>. Sugerimos que você procure um médico especialitas"); 
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        
        tipo = "100% de chances de ter Pitiríase rubra pilar";
    
    }else if((respostas[18]== 0) && (respostas[25]== 0) && (respostas[13] == 0) && (respostas[4]==0) && ((respostas[6]==0) || (respostas[6] ==1)) && ((respostas[24]==1) || (respostas[24] ==2) || (respostas[24]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Pitiríase rósea</b>. Sugerimos que voce procure um médico especialitas" );
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Pitiríase rósea";
    
    }else if((respostas[18]== 0) && (respostas[25]== 0) && (respostas[13] == 0) && (respostas[4]==0) && ((respostas[6]==0) || (respostas[6]==1)) && (respostas[24] ==0) && ((respostas[20]==0) || (respostas[20] ==1))){
    $("#answer").append("De acordo com o teste dermatologico <b>você tem 95,3% de chances de ter Dermatite sebórica</b>. Sugerimos que voce procure um médico especialitas");   
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        
        tipo = "95,3% de chances de ter Dermatite sebórica";
    
    }else if((respostas[18]== 0) && (respostas[25]== 0) && (respostas[13] == 0) && (respostas[4]==0) && ((respostas[6]==0) || (respostas[6]==1)) && (respostas[24] ==0) && ((respostas[20]==2) || (respostas[20] ==3))){
    $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Psoríase</b>. Sugerimos que voce procure um médico especialitas");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de chances de ter Psoríase";
    
    }else{
        console.log("erro");   
    }
}
    
// SALVAR NO FIREBASE
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
  firebase.database().ref("Dados/Completo").push().set(obj)
     //CASO SALVE COM SUCEESO FAZ O QUE TA DENTRO DO THEN
     
    .then(function (){
        console.log("salvou");            
    })
     //SE DEU ERRO NA HORA DE SALVAR FAZ O QUE TA DENTRO DO CATCH
     .catch(erro=>{
      console.log(erro)
    });        
      
}
   $("#resultado2").click(function(){
        $("#resultado2").attr('disabled', 'disabled');
        
        $("#resultado2").append("<span id='spinner' class='spinner-border spinner-border-sm'></span>")
        
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
                Body : "O seu resultado é : "+ tipo + ". Sugerimos que você procure um médico especialisata para confirmar o diagnóstico."
                }).then(
                    $.notify("Email enviado com sucessos!", "success")

                ).catch(erro =>$.notify
                       ("Houve um erro","error"));
} else {
        $.notify("Preencha o campo corretamente", "error")
    }
    
});






    
});









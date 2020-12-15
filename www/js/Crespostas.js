 $(document).ready(function(){
// CRIACAO DE VARIAVEIS    
var valor;
var c=0;
var timer;
var tipo;
var respostas = [];    
var perguntas = ["1. Qual é o seu grau de Eritema?",
                 "2. Qual é o seu grau de Descamação da pele?",
                 "3. Qual é o seu grau de Definição de bordas da epiderme?",
                 "4. Qual é o seu grau de Coceira?",
                 "5. Qual é o seu grau de Fenômeno de Koebner?",
                 "6. Qual é o seu grau de Pápulas poligonais?",
                 "7. Qual é o seu grau de Pápulas foliculares?",
                 "8. Qual é o seu grau de Envolvimento da mucosa oral?",
                 "9. Qual é o seu grau de Envolvimento do joelho e cotovelo?",
                 "10. Qual é o seu grau de Envolvimento do couro cabeludo?"];
    
 //CONFIGURACAO DE PRIMEIROS BOTOES   
    
    
    $("#primeiro").click(function(){
        $("#quiz1").hide();
        $("#btnVoltar").hide();
        $("#enviaForm").removeAttr("hidden");
        
    });
    
//FIM
// CONF PERGUNTAS 
    $("#pergunta").html(perguntas[c]);
    
    $("#btn-0").click(function(){
        valor = 0;
        $("#btn-next").removeAttr("disabled");
    
  
    });
 // CONFIGURACAO DOS BOTOES DAS PERGUNTAS     
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
    
 //CONFIGURACAO DO BOTAO PROXIMO   
    });
    
    $("#btn-next").click(function(){
       respostas.push(valor);
        c++;
       $("#pergunta").html(perguntas[c]);
       $("#btn-next").attr("disabled","disabled");
        
        if(c == 10){
       $("#quiz2").hide(); 
       $("#result").removeAttr("hidden");
 
    }
    });
         
 
   function CalcResultado(){ 
        
   if((respostas[5]== 1) || (respostas[5] == 2) || (respostas[5] == 3)){
    $("#answer").append("De acordo com o teste dermatológico <b>você tem 100% de chancês de ter  Lichen planus</b>. Sugerimos que você procure um médico especialitas."); 
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();  
     
      tipo = "100% de Lichen planus";
       
   }else if((respostas[0]==0) && (respostas[1]==0) && (respostas[2]==0) && (respostas[3]==0) && (respostas[4]==0) && (respostas[5]==0) && (respostas[6]==0) && (respostas[7]==0) && (respostas[8]==0) && (respostas[9]==0)){
     $("#answer").append("De acordo com o teste dermatologico você <b>não possui nenhuma doença dermatológica.</b>");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "Não identificado";
    
    }else if((respostas[5]== 0) && ((respostas[9] == 1) || (respostas[9]==2) || (respostas[9]==3)) && (respostas[2] == 0)){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 66,7% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas."); 
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();   
       
     tipo = " 66,7% de Dermatite sebórica";
       
    }else if((respostas[5]== 0) && ((respostas[9] == 1) || (respostas[9]==2) || (respostas[9]==3)) && ((respostas[6] == 2) || (respostas[6]==3))){
    $("#answer").append("De acordo com o teste dermatologico <b>você tem 66,7% de chances de ter Pitiríase rubra pilar</b>. Sugerimos que você procure um médico especialitas.");
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();  
     
        tipo = "66% de Pitiríase rubra pilar";
        
    }else if((respostas[5]== 0) && ((respostas[9]== 1) || (respostas[9] == 2) || (respostas[9] == 3)) && ((respostas[2]==2) || (respostas[2]==3)) && ((respostas[6]==0) || (respostas[6]==1))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");   
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "100% de Psiorise";
       
    }else if((respostas[5]== 0) && ((respostas[9]== 1)||(respostas[9]==2)||(respostas[9]==3)) && (respostas[2] ==1 ) && ((respostas[6] ==0) || (respostas[6]==1)) && (respostas[8]==0)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 66,7% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide(); 
        
        tipo = "66,7% de Dermatite sebórica";
        
    }else if((respostas[5]== 0) && ((respostas[9]== 1) || (respostas[9]==2) || (respostas[9]==3)) && (respostas[2] == 1) && ((respostas[6] ==0) || (respostas[6] ==1)) && ((respostas[8]==1) || (respostas[8]==2) || (respostas[8]==3))){
    
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");   
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
    
        tipo = "100% de Psiorise";
        
    }else if((respostas[5]== 0) && (respostas[9]== 0) && ((respostas[4] == 1) || (respostas[4] ==2) || (respostas[4]==3)) && ((respostas[8] ==2) || (respostas[8]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");      
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
    
        tipo = "100% de Psiorise";
        
    }else if((respostas[5]== 0) && (respostas[9]== 0) && ((respostas[4] == 1) || (respostas[4]==2) || (respostas[4]==3)) && ((respostas[8] ==0) || (respostas[8]==1)) && ((respostas[7]==1) || (respostas[7]==2) || (respostas[7]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter  Lichen planus</b>. Sugerimos que voce procure um médico especialitas.");      
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de Lichen planus";
    
    }else if((respostas[5]== 0) && (respostas[9]== 0) && ((respostas[4] == 1) || (respostas[4]==2) || (respostas[4]==3)) && ((respostas[8] ==0) || (respostas[8]==1)) && (respostas[7] ==0) && (respostas[1]==3)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 96,9% de chances de ter Pitiríase rósea</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
     
        tipo = "96,9% de Pitiríase rósea";
        
    }else if((respostas[5]== 0) && (respostas[9]== 0) && ((respostas[4] == 1) || (respostas[4]==2) || (respostas[4]==3)) && ((respostas[8] ==0) || (respostas[8]==1)) && (respostas[7]==0) && (respostas[1] ==3)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");   
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
    
        tipo = "100% de Psiorise";
    }else if((respostas[5]== 0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]== 2) || (respostas[1] == 3)) && ((respostas[6]==1) || (respostas[6]==2) || (respostas[6]==3)) && (respostas[8] ==0)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 75% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");    
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
    
        tipo = "75% de Dermaatite crônica";
    }else if((respostas[5]== 0) && (respostas[9]==0) &&(respostas[4]==0) && ((respostas[1]== 2) || (respostas[1] == 3)) && ((respostas[6]==1) || (respostas[6]==2) || (respostas[6]==3)) && ((respostas[8] ==1) || (respostas[8]==2)||(respostas[8]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Pitiríase rubra pilar</b>. Sugerimos que você procure um médico especialitas.");    
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de Pitiríase rubra pilar";
    
    }else if((respostas[5]== 0) && (respostas[9]==0) &&(respostas[4]==0) && ((respostas[1]== 2) || (respostas[1] == 3)) && (respostas[6]==0) && ((respostas[8]==2)||(respostas[8]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");       
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de Psiorise";
    
    }else if((respostas[5]== 0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==2) || (respostas[1]==3)) && (respostas[6]==0) && ((respostas[8]==0) || (respostas[8]==1)) && ((respostas[0]==0) || (respostas[0]==1))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 66,7% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");      
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "66,7% de Dermatite crônica";
        
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==2) || (respostas[1]==3)) && (respostas[6]==0) && ((respostas[8]==0) || (respostas[8]==1)) && ((respostas[3]==1) || (respostas[3]==2) || (respostas[3]==3)) && ((respostas[0]==2) || (respostas[0]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 86,2% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "86,2% de Dermatite sebórica";
        
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==2) || (respostas[1]==3)) && (respostas[6]==0) && (respostas[8]==0) && (respostas[3]==0)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 46,2% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "46,2% de Dermatite sebórica";
        
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==2) || (respostas[1]==3)) && (respostas[6]==0) && (respostas[8]==1) && (respostas[3]==0)){
    $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Psoríase</b>. Sugerimos que você procure um médico especialitas.");    
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de Psoríase";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && (respostas[6]==3)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Pitiríase rubra pilar</b>. Sugerimos que você procure um médico especialitas.");      
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        
        tipo = "100% de Pitiríase rubra pilar";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && ((respostas[6]==0) || (respostas[6]==1) || (respostas[6]==2)) && ((respostas[3]==2) || (respostas[3]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 90% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");    
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "90% de Dermatite crônica";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && ((respostas[6]==0) || (respostas[6]==1) || (respostas[6]==2)) && ((respostas[3]==0) || (respostas[3]==1)) && ((respostas[2]==2) || (respostas[2]==3))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 100% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "90% de Dermatite crônica";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && ((respostas[6]==0) || (respostas[6]==1) || (respostas[6]==2)) && ((respostas[3]==0) || (respostas[3]==1)) && (respostas[2]==0)){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 66,7% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");      
     $("#Voltar").removeAttr("hidden"); 
     $("#SendEmail").removeAttr("hidden");   
     $("#resultado").hide(); 
     $("#result").hide();
        tipo = "66,7% de Dermatite crônica";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && ((respostas[6]==0) || (respostas[6]==1) || (respostas[6]==2)) && ((respostas[3]==0) || (respostas[3]==1)) && (respostas[2]==1) && ((respostas[0]==2) || (respostas[0]==3))){
     $("#answer").append("De acordo com o teste dermatologico <b>você tem 100% de chances de ter Dermatite sebórica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "100% de Dermatite sebórica";
    
    }else if((respostas[5]==0) && (respostas[9]==0) && (respostas[4]==0) && ((respostas[1]==0) || (respostas[1]==1)) && ((respostas[6]==0) || (respostas[6]==1) || (respostas[6]==2)) && ((respostas[3]==0) || (respostas[3]==1)) && (respostas[2]==0) && ((respostas[0]==0) || (respostas[0]==1))){
     $("#answer").append("De acordo com o teste dermatologico<b> você tem 50% de chances de ter Dermatite crônica</b>. Sugerimos que você procure um médico especialitas.");     
     $("#opcoes").removeAttr("hidden");     
     $("#result").hide();
        tipo = "50% de Dermatite crônica";
    
    }else{
        console.log("erro");   
    }
}
        
    function salvar(){
 //SALVAR NO FIREBASE
    var idade = document.getElementById("idade").value;
    var radio = $('input:radio:checked').val();
    
    
    
     var obj={
        idade:idade, 
        Resultado:tipo,
        HistoricoNaFamilia:radio, 
        respostas:respostas
       };
//SALVA O OBJETO NA REFERÊNCIA DENTRO DO REF()
  firebase.database().ref("Dados/Clinico").push().set(obj)
     //CASO SALVE COM SUCEESO FAZ O QUE TA DENTRO DO THEN
     
    .then(function (){
        console.log("salvou");            
    })
     
     //SE DEU ERRO NA HORA DE SALVAR FAZ O QUE TA DENTRO DO CATCH
     .catch(erro=>{
      console.log(erro)
    });
      
 }
   $("#resultado").click(function(){
        $("#resultado").attr('disabled', 'disabled');
        
        $("#resultado").append("<span id='spinner' class='spinner-border spinner-border-sm'></span>")
        
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


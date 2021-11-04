$(document).ready(function(){
    /*$('#somar').click(function(){
        var numero1 = parseInt( $('#numero1').val());
        var numero2 = parseInt( $('#numero2').val());
        $('#resultado').text(numero1 + numero2);
    });*/

    //seletor de sabor
   /* $.ajax({
        url:'https://pizzaria.roxo.dev.br/',
        method: 'get',
        success(data){
            data.forEach(function(option){
                var precoReal1 = parseFloat(option.valor);
                
                $('#sabores').append('<option value="1">'+ option.nome + ' -> '+ precoReal1 + '</option>')
                $('#sabores2').append('<option value="1">'+ option.nome + ' -> '+ precoReal1 + '</option>')
                $('#sabores3').append('<option value="1">'+ option.nome + ' -> '+ precoReal1 + '</option>')
               
                
            })
           
        }
    });*/
    /*$('select').change(function() {
        var sum = 0;
        $('option:selected').each(function() {
          sum += parseFloat($(this).val(), 10);
        });
        $("#roomnumber").val(sum);
      });*/
    
       /* var sabor = $('select[name="sabor"] option:selected').map(function(){
            return this.value
        }).get()
        var soma = sabor.reduce((pv, cv) =>{
            return pv + (parseFloat(cv)||0);
        }, 0);
        $("#resultado").val(soma)*/
   
    
    
   

       
    //Cardapio
    function list(){
        $.ajax({
            url:'https://pizzaria.roxo.dev.br/',
            method: 'get',
            success(data){
                console.log(data);
                $('#tabela').append('<tr><th>Sabor</th><th>valor</th></tr>');

                data.forEach(function(item){
                    var precoReal = parseFloat(item.valor);                   
                    Real = precoReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    $('#tabela').append('<tr><td>' + item.nome + '</td><td>' + Real + '</td></tr>')
                }) 
            }
        });
    }list();
    
    //botoes
    $('#botao1').click(function(){
        $('#sabores').show();
        $('#sabores2').hide();
        $('#sabores3').hide();
        $('#resultado').hide();

        
    })
    $('#botao2').click(function(){
        $('#sabores').show();
        $('#sabores2').show();
        $('#sabores3').hide();
        $('#resultado').hide();
        
    })
    $('#botao3').click(function(){
        $('#sabores').show();
        $('#sabores2').show();
        $('#sabores3').show();
        $('#resultado').hide();
    })
    $('#sabores').hide();
    $('#sabores2').hide();
    $('#sabores3').hide();

   //atualizar valores por quantidade de sabor
    $('#botao1').click(function(){
        var primeiroSabor1 = parseFloat(document.getElementById("sabores").value);
        $('#check').click(function(){
             primeiroSabor1 = parseFloat(document.getElementById("sabores").value);
            $('#resultado').text(primeiroSabor1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
            $('#resultado').show();
            })
    })
    
        $('#botao2').click(function(){
            var primeiroSabor2 = parseFloat(document.getElementById("sabores").value);
            var segundoSabor2 = parseFloat(document.getElementById("sabores2").value);
            var resultado2;
            $('#check').click(function(){
                primeiroSabor2 = parseFloat(document.getElementById("sabores").value);
                segundoSabor2 = parseFloat(document.getElementById("sabores2").value);
                resultado2 = (primeiroSabor2 + segundoSabor2)/2;
                $('#resultado').text(resultado2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
                $('#resultado').show();
            })
        })
        
    $('#botao3').click(function(){
        var primeiroSabor3 = parseFloat(document.getElementById("sabores").value);
        var segundoSabor3 = parseFloat(document.getElementById("sabores2").value);
        var terceiroSabor3 = parseFloat(document.getElementById("sabores3").value);
        var resultado3;
        $('#check').click(function(){
            primeiroSabor3 = parseFloat(document.getElementById("sabores").value);
            segundoSabor3 = parseFloat(document.getElementById("sabores2").value);
            terceiroSabor3 = parseFloat(document.getElementById("sabores3").value);
            resultado3 = (primeiroSabor3 + segundoSabor3 + terceiroSabor3)/3;
            $('#resultado').text(resultado3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
            $('#resultado').show();

        })
    })


});


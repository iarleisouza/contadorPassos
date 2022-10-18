function contar() {
  
   var inicio = document.getElementById('txtinicio')
   var fim = document.getElementById('txtfim')
   var passo = document.querySelector('input#txtpasso')
   var res = document.querySelector('div#res')
   if (inicio.value.length == 0 || Number(fim.value.length == 0) || Number(passo.value.length == 0)) {
     res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Digite um valor!')
   }else {
               res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
              //  for (let c = i; c <= f; c += p) {
            for (let c = i; c <= f; c = c + p) {
            
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }else{
        //contagem regressiva
         //  for (let c = i; c >= f; c -= p) {
        for (let c = i; c >= f; c = c - p) {
           
            res.innerHTML += ` ${c} \u{1F449}`
    }
   
     
      
    }
   
    res.innerHTML += ` \u{1F3C1}`
    }
}



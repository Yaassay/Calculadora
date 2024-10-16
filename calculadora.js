function gerarCalculo() {
      
    const num1 = parseInt(document.getElementById('num1').value); // cria uma contante "num1".
    const num2 = parseInt(document.getElementById('num2').value); // cria uma contante "num2".
    const op = document.getElementById('op').value; // cria uma contante "op".
    const resultado = document.getElementById('resultado');
      // parseInt(): Converte o valor obtido em um número inteiro.
      // document.getElementById(''): Busca o elemento HTML com o ID .
      // .value: Obtém o valor inserido pelo usuário nesse campo.
    

    if (op == '+') { //se o operador for "+" soma os dois numeros
        resultado.innerHTML = `${num1} + ${num2} = ${num1 + num2}`;

    } else if (op == '-') { //se o operador for "-" subtrai os dois numeros
        resultado.innerHTML = `${num1} - ${num2} = ${num1 - num2}`;

    } else if (op == '*') { //se o operador for "*" multiplica os dois numeros
        resultado.innerHTML = `${num1} * ${num2} = ${num1 * num2}`;

    } else if (op == '/') { //se o operador for "/" divide os dois numeros
        resultado.innerHTML = `${num1} / ${num2} = ${num1 / num2}`;

    } else if (op == '**') { //se o operador for "**" eleva o num1 ao num2
        resultado.innerHTML = `${num1} ** ${num2} = ${num1 ** num2}`;

    } else if (op == '%') { //se o operador for "%" tira do num1 a porcentagem do num2
        resultado.innerHTML = `${num1} % ${num2} = ${(num1/100) * num2}`;

    } else if (op == '//') {  //se o operador for "//" calcula a raiz do num1
        resultado.innerHTML = `Raiz de ${num1} = ${Math.sqrt(num1)}`;

    } else { //se o operador for diferente, a conta é invalida
         resultado.innerText = "Operador inválido.";
 }
    


}
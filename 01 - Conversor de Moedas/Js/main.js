let valorEmReal = 100;
let cotacaoDoDolar = 5.32;
let cotacaoDoEuro = 5.25;
let cotacaoDaLibra = 6.03;
let cotacaoDoBitcoin = 180774.60;
let conversaoDolarReal = valorEmReal/cotacaoDoDolar;
let conversaoEuroReal = valorEmReal/cotacaoDoEuro;
let conversaoLibraReal = valorEmReal/cotacaoDaLibra;
let conversaoBitcoinReal = valorEmReal/cotacaoDoBitcoin;
let nome = "Pedro";

valorEmReal = valorEmReal.toFixed(2);
conversaoDolarReal = conversaoDolarReal.toFixed(2);
conversaoEuroReal = conversaoEuroReal.toFixed(2);
conversaoLibraReal = conversaoLibraReal.toFixed(2);
conversaoBitcoinReal = conversaoBitcoinReal.toFixed(2);

// alert("Olá " + nome + ", aqui está o valor de R$ " + valorEmReal + " covertidos:\nEm Dolares: US$ " + conversaoDolarReal +
// "\nEm Euros: € " + conversaoEuroReal + "\nEm Libras: £ " + conversaoLibraReal + "\nEm Bitcoins: ₿ " + conversaoBitcoinReal);

alert (`Olá ${nome}, aqui está o valor de R$ ${valorEmReal} covertidos:
Em Dolares: US$ ${conversaoDolarReal}
Em Euros: € ${conversaoEuroReal}
Em Libras: £ ${conversaoLibraReal}
Em Bitcoins: ₿ ${conversaoBitcoinReal}`);

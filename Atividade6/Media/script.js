function obternotas(){
	let nome = prompt("Qual é o seu nome?");
	document.write('<br>Nome: ' + nome);
	
	let nota01 = prompt("Digite a nota 01!");
	document.write('<br>Nota 01: '+ nota01);
	
	let nota02 = prompt("Digite a nota 02");
	document.write('<br>Nota 02: ' + nota02);
	
	let nota03 = prompt("Digite a nota 03");
	document.write('<br>Nota 03: ' + nota03);

	let media = calcularMedia(nota01, nota02, nota03);
	document.write('<hr><br> A Media é: ' + media);
}

function calcularMedia(nota1, nota2, nota3){
	let media = 0;
	media = (+nota1 + +nota2 + +nota3) / 3;
	return media;
}
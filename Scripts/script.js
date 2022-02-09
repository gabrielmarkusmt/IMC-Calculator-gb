
const calc = document.getElementById('calcular');



function imc(){
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado');


    if (name.value !== '' && height !== '' && weight !== ''){
        
        const valueIMC = (weight / (height * height)).toFixed(1);

        result.textContent = valueIMC;
        
        let classification = '';

        if (valueIMC < 18.5) {

            classification = "Abaixo do Peso.";
        }else if (valueIMC < 25) {

            classification = 'Está com peso ideal. Parabéns!!!';
        } else if (valueIMC < 30) {

            classification = 'Você está levemente acima do peso. Se cuide!';
        } else if (valueIMC < 35) {
            classification = 'Está com Obesidade Grau I.';
    
        } else if (valueIMC < 40){
            classification = 'Está com Obesidade Grau II';

        }else {
            classification = 'Está com Obesidade grau III. Cuidado!!';
        }

        result.textContent = `${name} seu IMC é ${valueIMC} e você está ${classification}`;

    } else {
        result.textContent = 'Preencha todos os campos!'
    }

}


calc.addEventListener('click', imc);












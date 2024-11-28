class Exam {
    constructor(resposta, peso) {
        this.resposta = resposta;
        this.exams = [];
        this.peso = peso;
    };

    nota(aluno){
        let nota = 0;
        for (let questao in this.resposta) {
            if (this.resposta[questao] === aluno[questao]) {
                nota += this.peso[questao]; 
            }
        }
        return nota
    };

    add(aluno) {
        let nota_aluno = this.nota(aluno.values);
        aluno.nota = nota_aluno;
        this.exams.push(aluno);
    };
    
    avg() {
        let avg = 0;
        for (let exam of this.exams) {
            avg += exam.nota;
        }
        return (avg / this.exams.length).toFixed(1);  
    };
    
    min() {
        let menor = 999999999999;
        for(let exam of this.exams){
            if(exam.nota < menor){
                menor = exam.nota
            }
        }
        return menor
    };
    
    max() {
        let maior = -999999999999;
        for(let exam of this.exams){
            if(exam.nota > maior){
                maior = exam.nota;
            }
        }
        return maior
    };

    lt(num){
        let cont_lt = 0;
        for(let exam of this.exams){
            if(exam.nota < num){
                cont_lt += 1;
            }
        }
        return cont_lt
    };

    gt(num){
        let cont_gt = 0;
        for(let exam of this.exams){
            if(exam.nota > num){
                cont_gt += 1;
            }
        }
        return cont_gt
    }
    
};

const resposta = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}; 
const peso = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};
const prova_t = new Exam(resposta, peso);


const aluno1 = {
    student: 'Alice',
    values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
};

const aluno2 = {
    student: 'Bob',
    values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

const aluno3 = {
    student: 'Marcos',
    values: {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'},
};

prova_t.add(aluno1);
prova_t.add(aluno2);
prova_t.add(aluno3);

console.log(prova_t.exams);

console.log(`média das notas: ${prova_t.avg()}`)

console.log(`menor nota: ${prova_t.min()}`)
console.log(`maior nota: ${prova_t.max()}`)


console.log(`notas menores que 7: ${prova_t.lt(7)}`)
console.log(`notas maiores que 7: ${prova_t.gt(7)} `)
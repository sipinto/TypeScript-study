function 클리닝함수(x: (number | string)[]){
    let 클리닝 :number[] = []; 
    for (let index:number = 0; index < x.length; index++) {
        if(typeof x[index] === 'string'){
            클리닝.push(Number(x[index]));
        } else if(typeof x[index] === 'number') {
            클리닝.push(Number(x[index]));
        }
    }
    return 클리닝;
}
console.log(클리닝함수(['2',3,'4']));

let 철수쌤 : {subject : string}= { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수(x: {subject :(string|string[])}){
    let 출력 :string ='';
    출력 = x[-1];
    return 출력;
}
console.log(만들함수(철수쌤));
console.log(만들함수(영희쌤));
console.log(만들함수(민수쌤));


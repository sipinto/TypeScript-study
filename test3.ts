function puu(namae? :string){
    if (namae) {
        console.log("안녕하세요 "+namae);
    } else {
        console.log("이름이 없습니다");
    }

}
console.log(puu('김민재'))

function pua(x? :string|number){
    if(typeof x === 'number'){
        console.log(x.toString().length);
    } else if(typeof x === 'string') {
        console.log(x.length);
    }
}
console.log(pua('1634'));

function merrige(월소득 :number, 집보유여부 :boolean, 매력점수 :string){
    let 소득 :number = 0;
    if(월소득>0){
        소득 = 월소득/10000;
    }
    let score : number = 0;
    if(소득>0){
        score += 소득;
    } 
    if(집보유여부){
        score += 500;
    } 
    if(매력점수 === '상'){
        score += 100;
    }
    if(score>=600){
        return '결혼가능!';
    }
}
console.log(merrige(600000,true,'상'));
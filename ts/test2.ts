var 배열: (number|string)[] = [1,'2',3];
var 객체: {data : (number|string) } = { data : '123' };

let user :string = 'kim';
let age :unknown | number = undefined;
let married :boolean = false; 
let 철수 :any[]= [user, age, married];

let 학교 : {score: (number|boolean)[], teacher: string, friend: string[]|string} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

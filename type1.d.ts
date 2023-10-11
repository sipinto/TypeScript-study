declare let 이름: string;
declare let 나이: number;
declare let 출생지역: string;
declare let music: {
    '가수': string;
    '곡': string;
};
declare let project: {
    'member': string[];
    'days': number;
    'started': boolean;
};
declare var 배열: (number | string)[];
declare var 객체: {
    data: (number | string);
};
declare let user: string;
declare let age: unknown | number;
declare let married: boolean;
declare let 철수: any[];
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string[] | string;
};
declare function puu(namae?: string): void;
declare function pua(x?: string | number): void;
declare function merrige(월소득: number, 집보유여부: boolean, 매력점수: string): "결혼가능!" | undefined;
declare function 클리닝함수(x: (number | string)[]): number[];
declare let 철수쌤: {
    subject: string;
};
declare let 영희쌤: {
    subject: string[];
};
declare let 민수쌤: {
    subject: string[];
};
declare function 만들함수(x: {
    subject: (string | string[]);
}): string;
declare module "src/App" {
    export default App;
    function App(): import("react").JSX.Element;
}
declare module "src/App.test" {
    export {};
}
declare module "src/reportWebVitals" {
    export default reportWebVitals;
    function reportWebVitals(onPerfEntry: any): void;
}
declare module "src/index" {
    export {};
}
declare module "src/setupTests" {
    export {};
}

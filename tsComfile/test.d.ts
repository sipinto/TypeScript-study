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
declare let 철수쌤: {
    subject: string;
};
declare let 영희쌤: {
    subject: string[];
};
declare let 민수쌤: {
    subject: string[];
};

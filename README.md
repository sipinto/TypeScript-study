# TypeScript Learning 

## 타입 스크립트 필수 문법 & 세팅 (Vue&React)

### 1. 타입스크립트를 쓰는 이유
-> 자바스크립트와는 달리 엄격한 타입룰 덕분에
큰 프로젝트 개발할 때 용이함.

-> 남이 짠 코드수정할 때 생기는 타입관련 버그를 쉽게 파악 가능함

### 2. 웹개발시 타입스크립트 사용을 위해서는
- 준비 세팅
  - Node.js 최신버전, Vscode 에디터 설치
  - Vscode 에디터에서 터미널 열기
    
    `npm install -g typescript`
  - 코드 작성할 작업폴더 생성 
  - 작업폴더를 에디터로 오픈
  - 작업폴더에 .ts로 끝나는 파일 만들고 타입스크립트 문법 입력 시작
  - js 파일 변환하려면 에디터에서 터미널 새로 열고
    
    `tsc -w` 입력해두면 자동으로 ts파일을 js 파일로 근처에 변환해줌
  - HTML 파일 등에서 타입스크립트로 작성할 코드 사용 시
    
    -> .ts 파일이 아닌 변환된 .js 파일 사용
    - 예시
  
        `<script src="변환.js"></script>`
### React 프로젝트에서 Typescript 사용 시
- 이미 있는 React 프로젝트 설치 시
  - 작업 폴더 경로에서 터미널 오픈
  - 명령어 입력

    `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- React 프로젝트를 새로 만듬과 동시 설치 시
  - 작업 폴더 경로에서 터미널 오픈
  - 명령어 입력

    `npx create-react-app my-app --template typescript` 

### Vue 프로젝트에서 Typescript 사용 시
- 이미 있는 Vue 프로젝트 설치 시
  - 작업 폴더 경로에서 터미널 오픈
  - 명령어 입력
  
    `vue add typescript` 입력하면 라이브러리 설치 완료
- Vue 파일에서 타입스크립트를 쓰려면
  - 예시
    
    `<script lang="ts"></script>`

## 타입 스크립트 문법 정리
### 변수 생성
  - 타입 지정 가능
  - 변수명 : 타입명 = '데이터' 방식으로 씀
    
    `let 변수명 :타입명 = '데이터' `
  - 타입 지정 가능 타입
    
    -> `string`, `number`, `boolean`, `bigint`, `null`, `undefinded`, `[]`, `{}`
  - 타입 지정 후 타입이 의도치 않게 변경 될 경우 
    
    ->에러메세지 띄워 줌
  - array 혹은 object 자료 타입 지정 시
    

    `let 이름 : stringp[] = ['kim', 'park']`

    `let 나이 :{ age : number } = { age : number }`
  - 변수에 여러가지 타입의 데이터가 들어오도록 지정 시
    - | 기호 이용해 or 연산자 표현 가능
    - 예시 
    
        `let 이름 :string | number = 'kim';`
  - 타입을 변수에 담기
    - type 키워드를 이용해 변수처럼 담아 사용가능
    - 예시
    
        `type nameType = string | number;`
    
        `let 이름 :nameType = 'kim'; `
  - 나만의 타입 만들기
    - 타입에 원하는 글자나 숫자를 입력하면 앞으로 해당 데이터만 들어 올 수 있음.
    - 예시
  
        `type NameType = 'kim' | 'park';`

        `let 이름 :NameType = 'kim';`
    - 이것을 literal type이라고 함    

### 함수 
  - 함수 타입 지정
    - 함수는 파라미터와 return 값이 어떤 타입일지 지정 가능
    - 실수로 다른 타입이 파라미터로 들어오거나 return 될 경우 
        
        ->error 발생 시켜줌
    - 함수는 return 타입으로 void 설정 가능
  
        -> void는 return이 없는지 체크할 수 있는 타입임.

  - 연산
    - 타입스크립트는 지금 변수의 타입이 확실치 않으면 연산 불가
    - 타입이 무엇인지 체크하는 narrowing 또는 assertion 문법을 사용해야 함.
### 배열
  - 배열 지정
    - 배열 자료 안에 순서를 포함해 어떤 자료가 들어올지 정확히 지정하고 싶으면
  
        -> tuple 타입 사용 하면 됨.
        
        -> 대괄호 [] 안에 들어올 자료의 타입을 차례로 적어주면 됨.
    - 예시
  
        `type Member = [number, boolean];`

        `let john:Member = [100,false];`
### 객체 타입
- 객체 지정
  - 객체 정의가 너무 길면 type 키워드로 변수에 담아 사용 가능함
  - type 키워드 대신 비교적 최근에 나온 interface 키워드 이용해도 무방
  - 특정 속성이 선택사항 시 물음표 기입 가능
  - 예시
    ```
    `type MyObject = {
        name? : string,
        age : number
    }
    let 철수 :MyObject = {
        name : 'kim',
        age : 50
    }
    ```
- 객체 할당 속성 모를 때
  - 전부 싸잡아 타입지정 가능
  - index signature라고 함
  - 예시
  
    ```
    type MyObject = {
        [key :string] : number,
    }
    let 철수 :MyObject = {
        age : 50,
        weight : 100,
    }
    ```
### 클래스
- 클래스 타입 설정
  - 중괄호 내에 미리 name 변수를 만들어야 constructor안에서 this. 키워드 붙여 사용가능
  - 예시
  ```
    class Person {
        name;
        constructor(name :string){
            this.name = name;
        }
    }
  ```

## Typescript 컴파일 시 세부 설정 (tsconfig.json)

### tsconfig 파일 생성하기
- tsconfig 
  - tsconfig 파일의 용도
    
    -> 타입스크립트 ts 파일들을 .js 파일로 변환할 때 어떻게 변환할 것인지 세부설정이 가능한 파일
  - 파일 생성

    -> 프로젝트 폴더 상단에서 tsconfig.json 파일 생성한다.
  - 파일 내부 설정
    ```
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
      }
    }
    ```
  - 파일 내부 설명
    - tartet
  
      -> typescript 파일을 어떤 버전의 js로 바꿔줄기 정하는 부분
      
      -> es5로 세팅해놓으면 es5 버전 js로 컴파일 해줌
    - module
  
      -> js 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳

      ->commonjs는 require 문법
      
      ->es2015, exnext는 import 문법을 사용함
      
      -> 어느 정도 IE 호환성 원하면 es5, commonjs
  - 추가로 입력할만한 사항들
    - nolmplicitAny
  
      -> any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정
    - strictNullChecks

      -> null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정
    - 예시

      ```
      {
        "compilerOptions": {
          "target": "es5",
          "module": "commonjs",
          "noImplicitAny": true,
          "strictNullChecks": true
        }
      }
  - tsconfig에 들어갈 기타 항목들
    - 예시 
      ``` 
        {
          "compilerOptions": {

            "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
            "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
            "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
            "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
            "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
            "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
            "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
            "outDir": "./", //js파일 아웃풋 경로바꾸기
            "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
            "removeComments": true, //컴파일시 주석제거 

            "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
            "noImplicitAny": true, //any타입 금지 여부
            "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
            "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
            "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
            "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
            "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

            "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
            "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
            "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
            "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
          }
        }

## 타입스크립트 기본 타입 정리 ( promitive types )

### 변수 만들 때 타입 정하기 ( 타입 쉴드 씌우기 )
- 타입스크립트에서는 변수의 타입을 지정가능
  - 예시

    `변수명 : 타입` 이렇게 지정 가능
    이러한 작업을 변수에 타입 쉴드를 씌웠다고 함.

### 여러가지 타입
- 자주 쓰는 primitive types
  - string
  - number
  - boolean
  - etc...( null, undefined )
  - 예시

    `let Namae :string = 'kimu';`

    `let age :number = 20;`

    `let girlfriend :boolean = false;`

### array & object 자료 안에도 타입 지정가능
- 여러 자료를 한 곳에 저장하고 싶을 때
  - array 
    - 그 안에 들어갈 자료들도 전부 타입지정 가능
    - 예시 (array의 경우 : 타입명[ ])

        `let member :string[] = ['nakamura', 'satou'];`
    - array 안에 다중 타입 지정 하려면

      -> (string | number)[ ] 
  - object 
    - 변수명 오른쪽에 오는 것들은 전부 타입지정 문법
    - 예시 
  
      `let profile : { age : number } = { age : 20 }`

### 팁
- 모든 변수에 타입지정 할 필요 없다.
  - 변수 생성 시 타입스크립트가 타입을 자동으로 부여하기 때문
  - 복잡하게 타입 명시할 필요 없음
  - 예시
  
    `let namae = 'kimu';`
    `let age = 20;`
- 에러 메세지 확인
  - tsc -w 명령어 실행중인 터미널에 나옴
  - 간결히 보고 싶으면 터미널 탭옆에 problems에도 나옴

## 타입 미디 정하기 애매할 시 ( union type, any, unknown )

### Union type 사용
- ` | ` 연산자
  - 다중 타입 정의 시 ` | `연산자 사용 (or 과 같은 의미)
  - ` | ` 연산자를 활용한 타입을 Union Type 이라고 한다.
  - 예시 

  `let namae: string | number = 'kim';`
  
  `let age: (string | number) = 100;`
- any 타입
  - 아무 자료나 할당 가능한 타입
  - '쉴드 해제'라고도 함
  - 타입을 아무렇게 바꿔도 에러 발생x
  - 남용금지
    
    -> 타입관련 버그 발생 시 추적 힘듬
  - 비상 시 쓰는 타입체크 해제 기능 용도가 적합
- unknown 타입
  - 모든 타입의 자료 전부 할당 가능
  - 어떤 타입이 들어올지 모를 경우 사용
  - 자료 할당 시 자료의 타입은 unknown
  - 뭘 할당할 지 모르지만 안정성은 도모하고 싶을 때 사용

## 함수에 타입 지정하는 법 & void 타입

### 함수의 기능
- 함수란?
  - 용도
    -> 용도가 긴 코드 짧게 축약한 것
  - 파라미터

    -> 함수의 소괄호 안에 들어가는 자료

### 함수에 타입지정하려면 2곳 가능
- 함수의 타입 지정
  - parameter : 함수로 들어오는 자료
  - return : 함수에서 나가는 자료
  - 함수로 들어오는 파라미터 지정

    -> 파라미터 옆에 입력하면 됨.
  - 함수가 실행된 후 남는 값 타입지정

    -> 함수명() 우측에 적으면 됨
  - 파라미터에 타입을 지정하면 필수 파라미터가 됨
### 함수는 타입 존재
- void 타입
  - return 방지 시 활용
  - return 할 자료가 없는 함수의 타입

### 파라미터가 옵션일 경우
- 함수에 파라미터 생성했지만 없이 쓸 때
  - 파라미터 우측에 물음표 입력하면 됨.
  - 해당 파라미터는 옵션이란 의미
  - 파라미터가 정의가 안되면 자동으로 undefined로 반영

### 함수도 예외없이 Union type 사용
- 변수의 타입이 number | string 과 같은 union 타입의 경우
  - 자료 조작 금지
- 옵션으로 지정한 파라미터의 number 타입도 조작 금지

## 타입 확정하기 Narrowing & Assertion

### Type Narrowing
- Type Narrowing 이란
  - if()문과 typeof 키워드 등으로 타입을 하나로 정해주는 것
  - 이렇게 코딩하는 것을 defensive하게 코딩한다고 함
  - 꼭 type of을 쓸 필요는 없고 타입을 하나로 확정 지을 수 있는 코드라면 어떤 것도 Narrowing 역할 가능
  - in, instanceof 키워드도 사용 가능

### Type Assertion
- assertion 문법
  - 용도

    -> 이 변수의 타입을 ~로 생각해줘
  - 사용
  
    -> 변수명 as 자료형(ex. string)
  - as 키워드 사용 시 특징

    -> as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할 

    -> as 키워드는 타입 쉴드 임시 해제용

    -> 타입 자체를 바꿔주는 것이기에 연산 오류가 있을 수 있음.
  - as 키워드 사용 예시

    -> 타입에러 이유를 모를경우 임시에 에러 해결용으로 사용

    -> 내가 어떤타입이 들어올지 정말 확실하게 알고 있지만 컴파일러 에러가 발생 시
- 변수 확인 용으로 console.log 활용
  - html 하나 만들고
  - ts에서 변환된 js 파일 집어 넣으면 개발자 도구에서 출력 가능
  - 혹은, tx파일을 바로 실행 시켜주는 에디터 부가기능 사용  

### 


import {Calculator} from '../src/calculator/main'

describe('Kalkulator',() => {
    let calc : Calculator;
    beforeAll(()=> {
        calc  = new Calculator();
    });

    const add = [[2,3,5],[4,1,5]];
    const sub = [[2,3,-1],[4,1,3]];
    const mult = [[2,3,6],[4,1,4]];
    const div = [[4,2,2],[8,2,4]];

    test.each(add)("Dodawanie liczb %i oraz %i powinno dać wynik %i",(n1 : number,n2 : number,expectedReturn : number) => {
       const value = calc.add(n1,n2);
       expect(value).toBe(expectedReturn);
    });

    test.each(sub)("Odejmowanie liczb %i oraz %i powinno dać wynik %i",(n1 : number,n2 : number,expectedReturn : number) => {
        const value = calc.sub(n1,n2);
        expect(value).toBe(expectedReturn);
     });

     test.each(mult)("Mnożenie liczb %i oraz %i powinno dać wynik %i",(n1 : number,n2 : number,expectedReturn : number) => {
        const value = calc.mult(n1,n2);
        expect(value).toBe(expectedReturn);
     });

     test.each(div)("Dzielenie liczb %i oraz %i powinno dać wynik %i",(n1 : number,n2 : number,expectedReturn : number) => {
        const value = calc.div(n1,n2);
        expect(value).toBe(expectedReturn);
     });
});
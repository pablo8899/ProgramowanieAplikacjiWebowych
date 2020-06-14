interface ICalculator {
    add(n1:number,n2:number):number;
    sub(n1:number,n2:number):number;
    div(n1:number,n2:number):number;
    mult(n1:number,n2:number):number;
}

export class Calculator implements ICalculator{
    add(n1:number,n2:number) {
        return n1 + n2;
    }

    sub(n1:number,n2:number) {
        return n1 - n2;
    }

    div(n1:number,n2:number) {
        if(n1 === 0 || n2 === 0)
            throw "Nie dzielimy przez 0"
        return n1 / n2;
    }

    mult(n1:number,n2:number) {
        return n1 * n2;
    }
}
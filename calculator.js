class Calculadora {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    suma() {
        return this.num1 + this.num2;
    }

    resta() {
        return this.num1 - this.num2;
    }

    multiplacion() {
        return this.num1 * this.num2;
    }

    division() {
        return this.num1 / this.num2;
    }

}

module.exports = Calculadora;
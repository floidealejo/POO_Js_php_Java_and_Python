class Tarjeta extends Payment {
    constructor(id, number, CVV, date) {
        super(id);
        this.number = number;
        this.CVV = CVV;
        this.date = date;
    }
}
class Driver extends Account {
    constructor(id, name, document, email, password) {
        super(id, name, document, email, password);
    }

    printDriverData() {
        console.log(this.id);
        console.log(this.email);
    }
}
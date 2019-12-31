class User extends Account {
    constructor(id, name, document, email, password) {
        super(id, name, document, email, password);
    }

    printUserData() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);

    }
}
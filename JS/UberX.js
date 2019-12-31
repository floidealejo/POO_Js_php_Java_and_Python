class UberX extends Car {
  constructor(license, driver, passenger, brand, model) {
    super(license, driver, passenger)
    this.brand = brand
    this.model = model
  }

  printDataUberX() {
    console.log("Señor usuario, la persona que atendera su servicio se llama", this.printDataCar().name,
      "y el vehiculo es un ", this.brand, this.model, "con placa ", this.license, "El numero de pasajeros permitidos es : ", this.getPassenger(), ". Disfruta tu viaje :)");
  }
}
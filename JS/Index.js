var driver1 = new Driver(1001, "Alejandro Upegui", "1000111", "aupegui@gmail.com", "pass301")
var driver2 = new Driver(10221, "Orlando Upegui", "1000111", "aupegui@gmail.com", "pass301")
var car = new Car("AWX 456", driver1, 2);
var car2 = new Car("TSC 932", driver2, 5);



var uberX = new UberX("AZX 673", driver1, 4, "Chevrolet", "Spark")
var uberX2 = new UberX("AZX 853", driver2, 4, "Chevrolet", "Spark")

uberX.printDataUberX()
uberX2.printDataUberX()

var user1 = new User(40333, "Samantha", "54440333", "sammy@gmail.com", "passsama");
user1.printUserData()
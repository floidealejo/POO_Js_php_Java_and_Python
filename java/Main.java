/**
 * Main
 */
public class Main {
    public static void main(String[] args) {
        Car car = new Car("AMR 456", new Account("Julian Gonzales", "22005413"));
        car.printDataCar();

        Car car2 = new Car("LAR 693", new Account("Carmen Zuluaga", "6644205"));
        car2.printDataCar();
    }
}
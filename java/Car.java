/**
 * Car
 */
public class Car {
    Integer id;
    String license;
    Account driver;
    Integer passenger;

    public Car(String license, Account driver) {
        super();
        this.license = license;
        this.driver = driver;

    }

    public void printDataCar() {
        System.out.println("License" + license + "Your driver name : " + driver.name);
    }
}
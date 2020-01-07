import java.util.ArrayList;
// import java.util.Map;

class UberBlack extends Car {
    ArrayList<String> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberBlack(final String license, final Account driver, ArrayList<String> typeCarAccepted,
            final ArrayList<String> seatsMaterial) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}
/**
 * Account
 */
public class Account {
    Integer id;
    String name;
    String document;
    String email;
    String password;

    public Account(String name, String document) {
        super();
        this.name = name;
        this.document = document;
    }
}
from car import Car
if __name__ == "__main__":
    print("Hola mundo")

    car = Car()
    car.license= "AMS 234"
    car.driver = "Andres Herrera"
    print(vars(car))
    
    car2 = Car()
    car2.license= "AMS 234"
    car2.driver = "Juancito Herrera"
    print(vars(car2))
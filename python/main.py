# from car import Car
from uberX import UberX
from account import Account
from payment import Payment
from tarjeta import Tarjeta

if __name__ == "__main__":

    car1 = UberX("AMS354", Account(
        "Andres Herrera", "AND876"), "Ford", "Fiesta")
    car2 = UberX("AMS354", Account(
        "Andres Surriaga", "AND576"), "Chevrolet", "Spark")
    car2.set_passenger = 50
    card = Tarjeta(1, "343434", 123, "23/10/2020")

    print(vars(car1))
    print(vars(car2))
    # car2.set_passenger = 4
    print(car2.get_passenger)
    print(vars(card))
    print(card.number)

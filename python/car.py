from account import Account


class Car:
    id = int
    license = str
    driver = Account("", "")
    _passenger = int

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver
        self._passenger = 0

    @property
    def get_passenger(self):
        return self._passenger

    @get_passenger.setter
    def set_passenger(self, get_passenger):
        if self.get_passenger > 4:
            print('Es correcto')
            self._passenger = get_passenger
        else:
            raise ValueError(
                f'Los pasajeros({get_passenger}) ingresado no es permitido')

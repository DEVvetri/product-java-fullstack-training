package inheritance;

class Vehicle {
    void noOfEngine() {
        System.out.println("I have one engine");
    }
}

class TwoWheeler extends Vehicle {
    void noOfWheels() {
        System.out.println("I have two wheels");
    }
}

class Bike extends TwoWheeler {
    void brandName() {
        System.out.println("Brand Name is Honda");
    }
}

class Scooty extends TwoWheeler {
    void brandName() {
        System.out.println("Brand Name is Activa");
    }
}

public class VehicleClass {
    public static void main(String[] args) {
        Bike bike = new Bike();
        bike.noOfEngine();
        bike.noOfWheels();
        bike.brandName();
        Scooty scooty = new Scooty();
        scooty.noOfEngine();
        scooty.noOfWheels();
        scooty.brandName();
    }
}
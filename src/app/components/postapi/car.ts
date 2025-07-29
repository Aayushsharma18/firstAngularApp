//Angular Class to represent a Car object
export class Car {
    //write export so that it can be imported in other files or classes.

    // Define the properties of the Car class
    carId: number;
    brand: string;
    model: string;
    year: string;
    color: string;
    dailyRate: string;
    carImage: string;
    regNo: string;

    // Constructor to initialize the properties
    constructor(brand: string, model: string) {
        this.carId = 0;
        this.brand = brand || "";
        this.model = model || "";
        this.year = "";
        this.color = "";
        this.dailyRate = "";
        this.carImage = "";
        this.regNo = "";

    }
}


// Angular Interface to define the structure of a Car object.
export interface ICarList {

    carId: number,
    brand: string,
    model: string,
    year: string,
    color: string,
    dailyRate: string,
    carImage: string,
    regNo: string,
}

//**Note: always use Class whenever working with Forms.
// use Interface whenever working with array or list type objects.
// This is because Class can have methods and properties, while Interface is just a structure.

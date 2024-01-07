//4.) write a class to calculate the Uber price.

class Uber {
    constructor(
        carModel,
        carType,
        color,
        registrationNumber
    ){
        this.carModel = carModel;
        this.carType = carType;
        this.color  = color;
        this.registrationNumber = registrationNumber
    }

    getprice(priceperKm,distance,demandPrice){
        return priceperKm*distance*demandPrice
    }
}

const myCar  = new Uber("BMW","Sedan","Black",8633)
console.log(myCar)
console.log(myCar.getprice(2,10,52))
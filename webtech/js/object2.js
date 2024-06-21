let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    isRunning: false,
    start: function() {
        this.isRunning = true;
        console.log('Car started.');
    },
    stop: function() {
        this.isRunning = false;
        console.log('Car stopped.');
    }
};
 console.log(car.start())
 console.log(car.color="red")
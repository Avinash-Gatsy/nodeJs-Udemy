const eat = {
    favFruit: 'Green Apple',
    fruits: ['Apple', 'Mango', 'Strawberry', 'Pineapple'],
    experiment() {
        console.log(`My fav fruit is - ${this.favFruit}`); // the scope of this is eat obj
        this.fruits.forEach(function (fruit) {
            console.log(`My fav fruit is not ${fruit}, but ${this.favFruit}`);
            // this.favFruit will be undefined, since, the scope of this is forEach()
        });
        console.log('--------------------------------------');
        this.fruits.forEach((fruit) => {
            console.log(`My fav fruit is not ${fruit}, but ${this.favFruit}`);
            // this.favFruit will have value, since, the scope of this in arrow function is the scope from where it is invoked. In this case its invoked inside experiment()
        });
    }
};
eat.experiment();
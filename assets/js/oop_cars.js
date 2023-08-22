class mobil {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
    nyalakanMesin() {
        console.log(`Mobil ${this.name}, mesinnya Menyala!`);
    }
    matikanMesin() {
        console.log(`Mobil ${this.name}, mesinnya mati!`);
    }

    static gasMesin(kecepatan) {
        console.log(`Hati-hati kecepatan Anda mencapat ${kecepatan} km/jam`);
    }
}

// inheritance

class mobilSport extends mobil {
    constructor(name, color, type, tahun) {
        super(name, color, type);
        this.tahun = tahun;
    }
    nyalakanMesin() {
        console.log(`Mobil ${this.name}, mesinnya meraung!`);
    }
}

// inheritance

class mobilSuv extends mobil {
    constructor(name, color, type) {
        super(name, color, type);
    }
}

const lamborgini = new mobilSport("Lamborgini","hijau","sport","2023");
console.log(lamborgini);
lamborgini.nyalakanMesin();
lamborgini.matikanMesin();

const innova = new mobilSuv("Innova","putih","SUV");
console.log(innova);
innova.nyalakanMesin();
innova.matikanMesin();

mobilSport.gasMesin(200);

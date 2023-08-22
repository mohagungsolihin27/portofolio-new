class kendaraan {
    constructor(merk, tahunProduksi) {
        this.merk = merk;
        this.tahunProduksi = tahunProduksi;
    }

    usiaKendaraan () {
        //const tahunSekarang = new Date().getFullYear
        const tahunSekarang = 2023;
        return tahunSekarang - this.tahunProduksi;
    }
}

class mobil extends kendaraan {
    constructor(merk, tahunProduksi) {
        super(merk, tahunProduksi);
    }

    hitungMobil() {
        console.log(`Kendaraan dengan merk ${this.merk} sudah berusia ${this.usiaKendaraan()} tahun`);
    }
}

class motor extends kendaraan {
    constructor(merk, tahunProduksi) {
        super(merk, tahunProduksi);
    }

    hitungMotor() {
        console.log(`Kendaraan dengan merk ${this.merk} sudah berusia ${this.usiaKendaraan()} tahun`);
    }
}

const toyota = new mobil("avanza",2019);
console.log(toyota);
toyota.hitungMobil();

const honda = new motor("cb 150r", 2020);
console.log(honda);
honda.hitungMotor();
// Construct Function

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama} Selamat makan`);
//   };
//   Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log("Kamu sudah bermain " + jam + " jam waktunya pulang");
//   };
// }

// cara yang lebih simple
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} Selamat makan`);
  }
  main(jam) {
    this.energi -= jam;
    console.log("Kamu sudah bermain " + jam + " jam waktunya pulang");
  }
}

let sandhika = new Mahasiswa("sandhika", 10);
// let ferry = new Mahasiswa("ferry", 10);

let ferry = new Mahasiswa("ferry", 10);

// Object Literal
// tidak efektif untuk object yang banyak

// let mahasiswa = {
//   nama: "sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama} Selamat makan`);
//   },
//   main: function (jam) {
//     this.energi = this.energi - jam;
//     console.log("Kamu sudah bermain " + jam + " jam waktunya pulang");
//   },
// };
// let mahasiswa2 = {
//   nama: "doddy",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama} Se4lamat makan`);
//   },
//   main: function (jam) {
//     this.energi = this.energi - jam;
//     console.log("Kamu sudah bermain " + jam + " jam waktunya pulang");
//   },
// };

// Function Declartaion

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama} Selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log("Kamu sudah bermain " + jam + " jam waktunya pulang");
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log("selamat tidur");
//   },
// };

// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   return mahasiswa;
// }
// let sandhika = mahasiswa("sandhika", 10);

// function mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }
// let sandhika = mahasiswa("sandhika", 10);
// let ferry = mahasiswa("ferry", 25);

// Construct Function

// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = methodMahasiswa.makan;
//   this.main = methodMahasiswa.main;
// }

// let sandhika = new mahasiswa("sandhika", 10);
// let doddy = new mahasiswa("ferry", 10);

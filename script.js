// // object literal

// let mahasiswa = {
//   nama: "ferry",
//   energi: 10,
// };
// let mahasiswa2 = {
//   nama: "wilana",
//   energi: 20,
// };
// object literal tidak efektik karena harus menulis function

// // function declartaion
// function declaration harus menggunakan {} kosong lagi diakhiri dengan return

// function Mahasiswa(nama, energi) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;
//   mhs.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("mahasiswa sudah makan");
//   };
//    mhs.main = function (jam){
//  this.energi -= jam ;
//  console.log('mahasiswa sudah main terlalu lama')
// }
//   return mhs;
// }

// let ferry = Mahasiswa("ferry", 20);

// // // dan ada cara yang lebih simple dengan membuat object.create
// dengan memisahkan semua object.

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log("mahasiswa sudah makan");
  },
  main: function (jam) {
    this.energi -= jam;
    console.log("mahasiswa sudah main terlalu lama");
  },
};
// function Mahasiswa(nama, energi) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;
//   mhs.makan = methodMahasiswa.makan;
//   mhs.main = methodMahasiswa.main;
//   return mhs;
// }

// // // dan ada cara yg lebih efektif tidak perlu banyak memori diweb
// // // dengan cara object create
// cara ini juga masih kurang efektif karena ketika memanggil method makan / main console.log masih mengeluarkan hasil undefined

// function Mahasiswa(nama, energi) {
//   let mhs = Object.create(methodMahasiswa);
//   mhs.nama = nama;
//   mhs.energi = energi;
//   return mhs;
// }
// let wilana = Mahasiswa("ferry", 20);

// cara yang lebih efektif adalah cara yang dibawah

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log("mahasiswa sudah makan");
  };
  Mahasiswa.prototype.main = function (jam) {
    this.energi -= porsi;
    console.log("mahasiswa sudah lama main ");
  };
}
let ferry = new Mahasiswa("ferry", 12);

// // // consctructor function
// tidak perlu membuat object kosong lagi karena sudah otomatis diketahui oleh si js
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("mahasiswa sudah makan");
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(
//       `hallo ${nama} kamu sudah bermain selama ${jam} jam waktunya pulang`
//     );
//   };
// }

// let ferry = new Mahasiswa("wilana", 20);

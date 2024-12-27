function hollyKnight(name, stamina, undead) {
  // Hitung jumlah undead yang bisa dikalahkan
  const defeated = Math.min(stamina, undead);

  // Menentukan hasil pertempuran berdasarkan kondisi yang diberikan
  if (defeated === undead && stamina > undead) {
      return `Holly Knight ${name} memenangkan pertempuran dengan mudah!`;
  } else if (defeated === undead && stamina === undead) {
      return `Beruntung Holly knight ${name} berhasil mengalahkan ${undead} undead!`;
  } else {
      return `Holly knight ${name} mengalahkan ${defeated} undead, namun sayang holly knight ${name} gugur di medan perang!`;
  }
}

// Contoh pengujian
console.log(hollyKnight('Lancelot', 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight('Gallahad', 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight('Tristan', 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!

// Ekspor fungsi agar dapat digunakan dalam pengujian
module.exports = hollyKnight;

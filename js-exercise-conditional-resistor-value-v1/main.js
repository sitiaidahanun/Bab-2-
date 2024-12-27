function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  // Definisi nilai warna
  const colorValues = {
      black: { significant: 0, multiplier: 1, tolerance: 20 },
      brown: { significant: 1, multiplier: 10, tolerance: 1 },
      red: { significant: 2, multiplier: 100, tolerance: 2 },
      orange: { significant: 3, multiplier: 1000, tolerance: null },
      yellow: { significant: 4, multiplier: 10000, tolerance: null },
      green: { significant: 5, multiplier: 100000, tolerance: null },
      blue: { significant: 6, multiplier: 1000000, tolerance: null },
      violet: { significant: 7, multiplier: 10000000, tolerance: null },
      grey: { significant: 8, multiplier: null, tolerance: null },
      white: { significant: 9, multiplier: null, tolerance: null },
      gold: { significant: null, multiplier: 0.1, tolerance: 5 },
      silver: { significant: null, multiplier: 0.01, tolerance: 10 }
  };

  // Menghitung significant figure
  const significantFigure = (colorValues[bandColor1].significant * 10) + colorValues[bandColor2].significant;

  // Mengambil multiplier dan toleransi
  const multiplier = colorValues[bandColor3].multiplier;
  const tolerance = colorValues[bandColor4].tolerance;

  // Menghitung nilai resistor
  const resistorValue = significantFigure * multiplier;

  // Mengembalikan hasil dalam format yang diinginkan
  return `${resistorValue} ohm ±${tolerance}%`;
}

// Contoh pengujian
console.log(resistorValue('brown', 'black', 'red', 'gold'));  // 100 ohm ±5%
console.log(resistorValue('red', 'red', 'red', 'gold'));      // 2200 ohm ±5%
console.log(resistorValue('yellow', 'violet', 'green', 'silver')); // 4900000 ohm ±10%
console.log(resistorValue('blue', 'grey', 'green', 'silver')); // 6800000 ohm ±10%

// Export fungsi untuk digunakan dalam pengujian
module.exports = resistorValue;


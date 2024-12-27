function zodiakSigns(date, month) {
  // Validasi bulan
  const validMonths = [
    'Januari', 'Februari', 'Maret', 'April',
    'Mei', 'Juni', 'Juli', 'Agustus',
    'September', 'Oktober', 'November', 'Desember'
  ];
  
  if (!validMonths.includes(month)) {
    return 'Input bulan salah'; // Error message for invalid month
  }
  
  // Validasi tanggal berdasarkan bulan
  let maxDays;
  switch (month) {
    case 'Januari':
    case 'Maret':
    case 'Mei':
    case 'Juli':
    case 'Agustus':
    case 'Oktober':
    case 'Desember':
      maxDays = 31;
      break;
    case 'April':
    case 'Juni':
    case 'September':
    case 'November':
      maxDays = 30;
      break;
    case 'Februari':
      maxDays = 29; // Mengakomodasi tahun kabisat
      break;
    default:
      return 'Input bulan salah'; // Handle unexpected cases
  }
  
  if (date < 1 || date > maxDays) {
    return 'Input tanggal salah'; // Error message for invalid date
  }
  
  // Menentukan zodiak
  if ((month === 'Januari' && date >= 20) || (month === 'Desember' && date <= 19)) {
    return 'Capricorn';
  } else if ((month === 'Februari' && date <= 18) || (month === 'Januari' && date >= 21)) {
    return 'Aquarius';
  } else if ((month === 'Maret' && date <= 20) || (month === 'Februari' && date >= 19)) {
    return 'Pisces';
  } else if ((month === 'April' && date <= 19) || (month === 'Maret' && date >= 21)) {
    return 'Aries';
  } else if ((month === 'Mei' && date <= 20) || (month === 'April' && date >= 20)) {
    return 'Taurus';
  } else if ((month === 'Juni' && date <= 20) || (month === 'Mei' && date >= 21)) {
    return 'Gemini';
  } else if ((month === 'Juli' && date <= 22) || (month === 'Juni' && date >= 21)) {
    return 'Cancer';
  } else if ((month === 'Agustus' && date <= 22) || (month === 'Juli' && date >= 23)) {
    return 'Leo';
  } else if ((month === 'September' && date <= 22) || (month === 'Agustus' && date >= 23)) {
    return 'Virgo';
  } else if ((month === 'Oktober' && date <= 22) || (month === 'September' && date >= 23)) {
    return 'Libra';
  } else if ((month === 'November' && date <= 21) || (month === 'Oktober' && date >= 23)) {
    return 'Scorpio';
  } else if ((month === 'Desember' && date <= 21) || (month === 'November' && date >= 22)) {
    return 'Sagittarius';
  }
}

// Contoh pengujian
console.log(zodiakSigns(22, 'Desember')); // Capricorn
console.log(zodiakSigns(21, 'Maret'));    // Aries
console.log(zodiakSigns(20, 'Mei'));      // Taurus
console.log(zodiakSigns(39, 'Mei'));      // Input tanggal salah
console.log(zodiakSigns(29, 'Februari')); // Pisces
console.log(zodiakSigns(28, 'Februari')); // Pisces
console.log(zodiakSigns(18, 'Februari')); // Aquarius
console.log(zodiakSigns(19, 'Februari')); // Pisces
console.log(zodiakSigns(30, 'April'));    // Input tanggal salah
console.log(zodiakSigns(0, 'Januari'));   // Input tanggal salah
console.log(zodiakSigns(20, 'Maret'));    // Pisces
console.log(zodiakSigns(21, 'Maret'));    // Aries
console.log(zodiakSigns(22, 'April'));    // Taurus
console.log(zodiakSigns(22, 'Mei'));      // Gemini
console.log(zodiakSigns(22, 'Juni'));     // Gemini
console.log(zodiakSigns(22, 'Juli'));     // Cancer
console.log(zodiakSigns(22, 'Agustus'));  // Leo
console.log(zodiakSigns(22, 'September')); // Virgo
console.log(zodiakSigns(22, 'Oktober'));   // Libra
console.log(zodiakSigns(22, 'November'));   // Scorpio

// Export fungsi untuk digunakan dalam pengujian
module.exports = zodiakSigns;

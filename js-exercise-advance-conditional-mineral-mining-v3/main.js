function mineralMining(mineralName, miningPower, duration, cost) {
  // Definisikan karakteristik mineral
  const minerals = {
      gold: { timeToGet: 30, marketPrice: 1 },
      silver: { timeToGet: 20, marketPrice: 0.6 },
      coper: { timeToGet: 5, marketPrice: 0.3 },
      uranium: { timeToGet: 75, marketPrice: 3 },
      platinum: { timeToGet: 15, marketPrice: 2 },
      titanium: { timeToGet: 55, marketPrice: 1.5 }
  };

  // Cek apakah mineral valid
  const mineral = minerals[mineralName];
  if (!mineral) {
      return "Invalid mineral name";
  }

  // Hitung total income
  const totalIncome = (duration / mineral.timeToGet) * miningPower * mineral.marketPrice;

  // Analisa pendapatan
  const profitOrLoss = totalIncome - cost;
  if (profitOrLoss < 0) {
      return `Mineral mining at a loss ${profitOrLoss}`;
  } else if (profitOrLoss > 0) {
      return `Mineral mining profit ${profitOrLoss}`;
  } else {
      return "Mineral mining get nothing";
  }
}

// Contoh penggunaan
console.log(mineralMining('gold', 10, 70, 59));      // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40));      // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150));  // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30));    // Mineral mining profit 168

module.exports = mineralMining;

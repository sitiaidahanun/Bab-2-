function profitMonitor(todayProfit, lastProfit) {
  if (todayProfit > lastProfit) {
      const increase = todayProfit - lastProfit;
      return `Profit naik sebanyak ${increase} point`;
  } else if (todayProfit < lastProfit) {
      const decrease = lastProfit - todayProfit; // Ubah dari todayProfit - lastProfit menjadi lastProfit - todayProfit
      return `Profit turun sebanyak ${decrease} point`;
  } else {
      return 'Profit stabil';
  }
}

module.exports = profitMonitor;

// Contoh penggunaan
console.log(profitMonitor(100, 50));  // Output: "Profit naik sebanyak 50 point"
console.log(profitMonitor(50, 100));   // Output: "Profit turun sebanyak 50 point"
console.log(profitMonitor(50, 50));     // Output: "Profit stabil"

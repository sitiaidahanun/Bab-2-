function quantityDiscount(quantity, price) {
  // Total harga barang
  const totalPrice = quantity * price;
  let discount = 0;

  // Hitung diskon berdasarkan quantity
  if (quantity >= 10) {
      discount = totalPrice * 0.2; // Diskon 20%
  } else if (quantity >= 5) {
      discount = totalPrice * 0.15; // Diskon 15%
  }

  // Subtotal setelah diskon
  const subtotalAfterDiscount = totalPrice - discount;

  // Pajak 11% dari subtotal
  const tax = subtotalAfterDiscount * 0.11;

  // Total yang harus dibayar
  const totalToPay = subtotalAfterDiscount + tax;

  return totalToPay; // Mengembalikan total dalam bentuk desimal
}

// Contoh penggunaan
console.log(quantityDiscount(3, 10000));  // Output: 33330
console.log(quantityDiscount(7, 10000));  // Output: 66045
console.log(quantityDiscount(12, 10000)); // Output: 106560

module.exports = quantityDiscount;

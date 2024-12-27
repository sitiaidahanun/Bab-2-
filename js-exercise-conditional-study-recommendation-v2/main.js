// beginanswer
function StudyRecommendation(mathScore, physicsScore, englishScore) {
  let recommendations = [];

  // Cek jurusan berdasarkan kriteria
  if (mathScore >= 85 && physicsScore >= 85 && englishScore >= 85) {
      recommendations.push("Teknik Informatika");
  }
  if (mathScore >= 80 && physicsScore >= 75) {
      recommendations.push("Teknik");
  }
  if (mathScore >= 80 && englishScore >= 70) { // Ganti dari englishScore > 70 menjadi englishScore >= 70
      recommendations.push("Ekonomi");
  }
  if (englishScore >= 70) {
      recommendations.push("Sastra Inggris");
  }
  if (mathScore >= 80) {
      recommendations.push("Matematika");
  }
  if (physicsScore >= 75) {
      recommendations.push("Fisika");
  }

  // Jika tidak ada rekomendasi
  if (recommendations.length === 0) {
      return "Maaf, tidak ada rekomendasi yang dapat kami berikan.";
  }

  // Mengembalikan hasil rekomendasi
  return "Rekomendasi jurusan yang bisa dipilih: " + recommendations.join(";") + ";";
}
// endanswer

// Contoh penggunaan
console.log(StudyRecommendation(0, 0, 0)); // expected Output => Maaf, tidak ada rekomendasi yang dapat kami berikan.
console.log(StudyRecommendation(80, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(StudyRecommendation(80, 75, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
console.log(StudyRecommendation(60, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(StudyRecommendation(80, 85, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
console.log(StudyRecommendation(85, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(StudyRecommendation(64, 90, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(StudyRecommendation(40, 85, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Fisika;
console.log(StudyRecommendation(85, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;

module.exports = StudyRecommendation;

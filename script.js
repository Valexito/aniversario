document.addEventListener('DOMContentLoaded', function () {
  const lyricsContainer = document.getElementById('lyrics');

  // Replace with your actual lyrics data
  const lyricsData = [
      { time: 11, text: "" },
      { time: 26, text: "" },
      { time: 30, text: "" },
      { time: 32, text: "No siento las horas cuando estoy contigo" },
      { time: 36, text: "" },
      { time: 37, text: "Me encanta porque todo lo ves positivo" },
      { time: 43, text: "" },
      { time: 44, text: "Amo tus lunares y tus cicatrices" },
      { time: 48, text: "Dime en este tiempo dónde te metiste" },
      { time: 52, text: "Que no te podía encontrar" },
      { time: 58, text: "No sé si fue Dios o tal vez fue el destino" },
      { time: 66, text: "Lo único que sé; vamos por buen camino" },
      { time: 74, text: "Que estaré contigo por todas las vidas" },
      { time: 78, text: "Recordar quien eres por si un día lo olvidas" },
      { time: 82, text: "Por ti haría eso y más" },
      { time: 89, text: "Y si no existieras yo te inventaría" },
      { time: 92, text: "Mismo corazón y la misma sonrisa" },
      { time: 96, text: "Eres mi razón, mi paz, mi sol, mi trigo" },
      { time: 99, text: "Simplemente gracias por estar conmigo" },
      { time: 104, text: "Aquí están mis brazos, siéntete segura" },
      { time: 107, text: "Que para tus miedos yo tengo la cura" },
      { time: 111, text: "Eres lo que tanto a Dios yo le pedía" },
      { time: 114, text: "No voy a defraudarte, sólo en mí confía" },
      { time: 119, text: "Y si miras para el cielo y no hay estrellas" },
      { time: 124, text: "No me culpes" },
      { time: 128, text: "Pues te las merecías" },
      { time: 146, text: "Y si no existieras yo te inventaría" },
      { time: 149, text: "Mismo corazón y la misma sonrisa" },
      { time: 154, text: "Eres mi razón, mi paz, mi sol, mi trigo" },
      { time: 157, text: "Simplemente gracias por estar conmigo" },
      { time: 160, text: "Aquí están mis brazos, siéntete segura" },
      { time: 164, text: "Que para tus miedos yo tengo la cura" },
      { time: 168, text: "Eres lo que tanto a Dios yo le pedía" },
      { time: 171, text: "No voy a defraudarte, sólo en mí confía" },
      { time: 176, text: "Y si miras para el cielo y no hay estrellas" },
      { time: 180, text: "No me culpes" },
      { time: 184, text: "Pues te las merecías" }
  ];

  let currentIndex = 0;

  function showLyrics() {
      if (currentIndex < lyricsData.length) {
          lyricsContainer.textContent = lyricsData[currentIndex].text;
          currentIndex++;
      } else {
          currentIndex = 0; // Start over if reached the end of lyrics
      }
  }

  setInterval(showLyrics, 5000); // Change text every 5 seconds (5000 milliseconds)
});

const message = `hai sayangku aku harap kamu tau kalau aku beruntung punya kamu.\nKamu tau ga sih sayang aku selalu bersyukur bisa punya perempuan kayak kamu, aku bener bener sayang sama kamu.\n\nMungkin aku gabisa selalu deket atau selalu buat kamu ketawa kayak temen temen kamu. Tapi aku bener bener sayang sama kamu, walau aku terkadang harus ngebendung rasa cemburu aku sayang\n\nTetep stay sama aku ya? aku takut kamu pergi sayangg\n\nAku harap hubungan kita selalu kayak gini ya sayang I love you sayang<3 `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

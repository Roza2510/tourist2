function toggleDetails(button) {
    const tourItem = button.parentElement;
    const details = tourItem.querySelector('.details');
  
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        details.style.display = 'none';
        button.textContent = 'Подробнее'; 
    }
  }
  
  
  
  
  
  
  
  // Маалыматты жабуу функциясы
  function closeDetails() {
    document.getElementById("tour-details").style.display = "none";
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
      const tourInfo = {
          "ysyk-kol": {
              title: "Ысык-Көлгө эс алуу",
              image: "ысык-кол.jpg",
              description: "Ысык-Көл — дүйнөдөгү эң чоң экинчи тузсуз көл. Жайкысын туристтер үчүн эң популярдуу эс алуу жайларынын бири."
          },
          "ala-archa": {
              title: "Ала-Арча улуттук паркы",
              image: "ала-арча.jpg",
              description: "Бишкек шаарына жакын жайгашкан, тоо сейилдөөсү жана альпинизм үчүн идеалдуу жер."
          },
          "sulaiman-too": {
              title: "Сулайман-Тоого зыярат",
              image: "сулайман-тоо.jpg",
              description: "ЮНЕСКОнун дүйнөлүк мурастар тизмесине кирген ыйык тоо, тарыхый жана маданий мааниге ээ."
          },
          "tash-rabat": {
              title: "Таш-Рабат кербен сарайы",
              image: "таш-рабат.jpg",
              description: "15-кылымдагы кербен сарайы, Жибек жолу убагында соодагерлер үчүн токтоо жай болгон."
          },
          "sary-chelek": {
              title: "Сары-Челек көлү",
              image: "сары-челек.jpg",
              description: "Биосфералык корук, уникалдуу өсүмдүктөр жана жаныбарлар дүйнөсүнө ээ."
          },
          "arslanbap": {
              title: "Арсланбап токойлору",
              image: "арсланбап.jpg",
              description: "Дүйнөдөгү эң чоң жаңгак токойу. Туристтер үчүн укмуштуу жаратылыш кооздугу."
          },
          "jeti-oguz": {
              title: "Жети-Өгүз капчыгайы",
              image: "жети-өгүз.jpg",
              description: "Кызыктуу жаратылыш таш түзүлүштөрү менен белгилүү, Кыргызстандын туристтик символдорунун бири."
          },
          "son-kol": {
              title: "Соң-Көл көлү",
              image: "сон-көл.jpg",
              description: "Жайлоолордун арасында жайгашкан тоо көлү. Көчмөндөрдүн жашоосу менен таанышуу үчүн эң мыкты жер."
          },
          "ala-kol": {
              title: "Ала-Көл көлү",
              image: "ала-көл.jpg",
              description: "Гималай стилиндеги керемет тоо көлү, жөө туристтер үчүн идеалдуу маршрут."
          }
      };
  
      document.querySelectorAll(".btn").forEach(button => {
          button.addEventListener("click", function() {
              const tourKey = this.getAttribute("data-tour");
              const tourDetails = document.getElementById("tour-details");
  
              if (tourInfo[tourKey]) {
                  tourDetails.innerHTML = `
                      <h3>${tourInfo[tourKey].title}</h3>
                      <img src="${tourInfo[tourKey].image}" alt="${tourInfo[tourKey].title}" width="300px">
                      <p>${tourInfo[tourKey].description}</p>
                      <button onclick="closeDetails()">Жабуу</button>
                  `;
                  tourDetails.style.display = "block";
              }
          });
      });
  });
  
  function closeDetails() {
      document.getElementById("tour-details").style.display = "none";
  }
  
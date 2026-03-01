const bsasOptions = [
  { text: "Tamamen Katılmıyorum", value: 0 },
  { text: "Katılmıyorum", value: 1 },
  { text: "Ne Katılıyorum Ne Katılmıyorum", value: 2 },
  { text: "Katılıyorum", value: 3 },
  { text: "Tamamen Katılıyorum", value: 4 }
];

const originalBsasQuestions = [
  "İnternetten alışveriş yapmak hayatımdaki en önemli şeydir.",
  "Her zaman internetten alışveriş yapmakla ilgili düşünürüm.",
  "İnternetten alışveriş yapmayı düşünürken ya da planlarken çok fazla zaman harcıyorum.",
  "İnternetten alışveriş yapmayla ilgili düşünceler aklıma gelir.",
  "Bazen daha iyi hissetmek için çevrimiçi alışveriş yaparım.",
  "Bazen ruh halimi (duygu durumumu) değiştirmek için internetten alışveriş yaparım.",
  "Kişisel problemlerimi unutmak için internetten alışveriş yaparım.",
  "Suçluluk, kaygı, çaresizlik, yalnızlık ve /veya depresyon hislerimi azaltmak için internetten bazı şeyler satın alırım.",
  "O kadar fazla internetten alışveriş yapıyorum ki günlük yükümlülüklerim (ör: okul ve iş) olumsuz yönde etkileniyor.",
  "İnternetten alışveriş yapmam sebebiyle hobilerime, boş zaman etkinliklerime, iş/okul ya da egzersizlerime daha az öncelik veririm.",
  "İnternetten alışveriş yapmam sebebiyle sevgilimi/ eşimi, ailemi ve arkadaşlarımı ihmal ederim.",
  "İnternetten alışveriş yapmam sebebiyle genellikle diğerleriyle konuşmalarım tartışmayla biter.",
  "İnternetten alışveriş yapmak için kendimde artan bir eğilim hissediyorum.",
  "İnternetten planladığımdan çok daha fazla alışveriş yaparım.",
  "Eskiden olduğu gibi doyuma ulaşamam için gittikçe daha fazla miktarda internetten alışveriş yapmak zorunda hissediyorum.",
  "İnternetten alışveriş yapmak için gittikçe daha fazla zaman harcıyorum.",
  "İnternetten alışveriş yapmayı azaltmaya yönelik başarısız denemelerim oldu.",
  "Başkaları tarafından internetten alışveriş yapmayı azaltmam gerektiği söylendi.",
  "İnternetten alışveriş yapmayı azaltmaya karar verdim ama henüz başaramadım.",
  "İnternetten alışveriş yapmayı bir süreliğine kısıtlamayı başardım ama sonra bu alışkanlığım nüksetti.",
  "İnternetten alışveriş yapmam engellenirse, strese girerim.",
  "Bazı sebeplerden dolayı internetten alışveriş yapamayacağımı hissedersem huysuz ve hırçın olurum.",
  "Bazı sebepler internetten alışveriş yapmamı engellerse kendimi kötü hissederim.",
  "Son internet alışverişimin üzerinden zaman geçtiyse, çevrimiçi alışveriş yapmak için güçlü bir dürtü hissederim.",
  "İnternetten o kadar çok alışveriş yaparım ki, parasal sorunlara sebep olur.",
  "İnternetten o kadar çok alışveriş yaparım ki, psikolojik sağlığımı bozar.",
  "İnternetten alışveriş yapma sorunum hakkında o kadar çok endişelenirim ki, bazen beni uyku tutmaz.",
  "İnternetten yaptığım alışverişlerim yüzünden vicdanen rahatsız olurum."
];

const questions = [
  // 1-17 Demografi, Sağlık ve Finans
  { text: "Nörolojik bir rahatsızlık tanınız var mı? (örn. epilepsi, MS vb.)", options: ["Evet", "Hayır"], type: "single" },
  { text: "Kronik bir hastalığınız var mı ve buna bağlı düzenli ilaç kullanıyor musunuz? (örn. kalp hastalığı, astım, diyabet vb.)", options: ["Evet", "Hayır"], type: "single" },
  { text: "Daha önce (örn. depresyon, bipolar bozukluk, şizofreni vb.) psikiyatrik bir hastalık tanısı aldınız mı?", options: ["Evet", "Hayır"], type: "single" },
  { text: "Uyku bozukluğu(örn. insomnia, uyku apnesi vb.) tanınız var mı veya düzenli uyku problemi yaşıyor musunuz?", options: ["Evet", "Hayır"], type: "single" },
  { text: "Madde bağımlılığı (alkol veya başka bir maddeyle) ilgili tanı/tedavi öykünüz var mı?", options: ["Evet", "Hayır"], type: "single" },
  { text: "EEG ölçümlerini etkileyebilecek psikiyatrik ilaç kullanıyor musunuz?", options: ["Evet", "Hayır"], type: "single" },
  { text: "Diğer bağımlılık türlerinden (şans oyunları, internet, telefon vs..) en az biri tanı aldım/mevcuttur.", options: ["Evet", "Hayır"], type: "single" },
  { text: "Baskın eliniz:", options: ["Sağ", "Sol", "Her iki el"], type: "single" },
  { text: "Yaş:", options: ["18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55 ve üzeri"], type: "single" },
  { text: "Eğitim:", options: ["İlköğretim", "Lise", "Lisans", "Yüksek Lisans", "Doktora"], type: "single" },
  { text: "Medeni Durum:", options: ["Evli", "Bekar"], type: "single" },
  { text: "Çalışma Durumu:", options: ["Tam zamanlı çalışan (düzenli mesai)", "Yarı zamanlı çalışan", "Serbest çalışan", "Vardiyalı çalışan", "Öğrenci", "Düzenli bir işi olmayan", "Öğrenci ve çalışan", "İş arayan", "Ev içi sorumluluklarla meşgul", "Emekli", "Diğer"], type: "single" },
  { text: "Kredi kartı sayısı:", options: ["Yok", "1", "2", "3 ve üzeri"], type: "single" },
  { text: "Aylık kişisel gelir (TL):", options: ["Gelirim yok", "28.075 TL’nin altında (asgari ücret altı)", "28.075 – 42.000 TL", "42.001 – 56.000 TL", "56.001 – 84.000 TL", "84.001 – 112.000 TL", "112.001 TL ve üzeri"], type: "single" },
  { text: "Son 12 ayda çevrimiçi alışveriş için ortalama aylık harcamanız hangi aralıktadır? (TL)", options: ["Harcama yapmıyorum", "1 – 5.000 TL", "5.001 – 15.000 TL", "15.001 – 30.000 TL", "30.001 – 60.000 TL", "60.001 TL ve üzeri"], type: "single" },
  { text: "Toplam kredi kartı borcunuz aşağıdaki aralıklardan hangisine girmektedir? (TL)", options: ["Borcum yok", "1-10.000 TL", "10.001 – 30.000 TL", "30.001 – 60.000 TL", "60.001 – 100.000 TL", "100.001 TL ve üzeri"], type: "single" },
  { text: "Son 12 ay içinde kredi kartı borcu veya bireysel kredi için yapılandırma (taksitlendirme / borç düzenleme) talebinde bulundunuz mu?", options: ["Hayır", "Evet, kredi kartı borcu için", "Evet, bireysel kredi için", "Evet, her ikisi için"], type: "single" },

  // 18-45 BSAS Ölçeği
  ...originalBsasQuestions.map(q => ({
    text: q,
    options: bsasOptions,
    type: "single",
    isScored: true
  })),

  // 46-53 Davranışsal Ek Sorular
  { text: "Çevrim içi bir ürünü satın alırken başkalarının önerileri kararımı ne ölçüde etkiler?", options: ["Hiç Etkilemez", "Etkilemez", "Ne etkiler ne etkilemez", "Etkiler", "Çok Etkiler"], type: "single" },
  { text: "Çevrim içi alışveriş yaparken görüşlerini dikkate aldığınız kişileri seçiniz.", options: ["Eş", "Aile (Anne-baba/kardeş)", "Diğer akrabalar", "Yakın arkadaş", "Tanıdık / Uzak arkadaş", "İş arkadaşı", "Uzman/profesyonel (Doktor, teknisyen vb.)", "Influencer / Fenomen", "Sosyal medya takipçileri/kişileri (Tanımadığım kişiler dahil)", "Online topluluk/gruplar (WhatsApp/Telegram/Facebook vb.)", "Forum üyeleri (Ekşi, DH vb.)", "Diğer kullanıcılar (Yorum/Puanlar üzerinden)", "Hiç kimse / Tek başıma karar veririm", "Diğer"], type: "multiple" },
  { text: "Ürün önerisi paylaştığınız kişi/kişilerle hangi iletişim kanallarını kullanırsınız?", options: ["WhatsApp", "Instagram", "E-posta", "Yüz yüze", "Facebook", "TikTok", "Diğer"], type: "multiple" },
  { text: "Yakın zamanda yaptığınız çevrimiçi alışverişi düşününüz. Bu ürünü satın almadan önce dikkatinizi çeken unsurlar nelerdi? (Birden fazla seçenek işaretleyebilirsiniz.)", options: ["Sokak reklamları (billboard, afiş, dijital ekranlar)", "Mağaza vitrinleri", "Web sitesi banner reklamları", "Sosyal medya görsel reklamları", "Televizyon reklamları", "YouTube / Video platformu reklamları", "Radyo reklamları", "Mağaza içi anonslar", "E-posta reklamları", "Mobil uygulama bildirimleri", "SMS kampanya mesajları", "Sosyal medya reklamı", "Influencer / içerik üreticisi paylaşımı", "Ürünün görsel tasarımı / Ambalaj", "Marka ismi", "İndirim / kampanya", "Kupon / promosyon kodu", "“Sınırlı süre” uyarısı", "Ücretsiz kargo", "Fiyatın uygun görünmesi", "“Sınırlı ürün” uyarısı", "Ürün yorumları", "Yıldız puanı", "Satış sayısı / popülerlik göstergesi", "Tanıdık birinin önerisi", "Sosyal medya yorumları", "O ürüne ihtiyacım olması", "Daha önce benzer ürün aramış olmam", "Uzun süredir almak istiyor olmam", "Ürünün işlevsel özellikleri", "Merak duygusu", "O anki ruh halim", "Kendimi ödüllendirme isteği", "Stresi azaltma isteği", "Sıkılmış olmam", "O an internette gezinmem", "Bildirim gelmesi", "Hatırlatma e-postası / mesajı", "Diğer"], type: "multiple" },
  { text: "Ürünü satın alma işlemi öncesinde duygusal olarak neler hissettiniz? (Birden fazla seçenek işaretleyebilirsiniz.)", options: ["Heyecan", "Sabırsızlık", "Gerginlik", "Kalp atışında artış", "Rahatlık", "Hiçbir değişiklik hissetmedim", "Merak", "Mutluluk beklentisi", "Kararsızlık", "Stres azalması hissi", "Kaygı", "Kendimi ödüllendireceğimi düşünme", "Olumlu bir şey olacak hissi", "Zevk alma beklentisi", "Tereddüt", "Emin olamama", "Rahatlama beklentisi", "Kendimi daha iyi hissedeceğimi düşünme", "İç sıkıntısı", "Baskı altında hissetme", "İçsel hareketlilik", "Kendimi durdurmakta zorlanacağımı hissetme", "Güçlü bir satın alma isteği", "Kendimi ürüne doğru çekilmiş hissetme", "Satın alınca mutlu olacağımı düşünme", "Kendimi şımartma isteği", "Aklımı başka şeylerden uzaklaştırma isteği", "Can sıkıntısından kurtulma isteği", "Diğer"], type: "multiple" },
  { text: "Ürünü satın alma işlemi sırasında duygusal olarak neler hissettiniz? (Birden fazla seçenek işaretleyebilirsiniz.)", options: ["Heyecan", "Hızlanmış kalp atışı", "Sabırsızlık", "Gerginlik", "Rahatlama", "Hiçbir değişiklik hissetmedim", "Mutluluk", "Keyif", "Tatmin duygusu", "Kararsızlık", "Suçluluk", "Dikkat yoğunlaşması", "Stres azalması", "İç huzur hissi", "Suçluluk hissi", "Kaygı", "Baskı altında hissetme", "Tereddüt", "Emin olamama", "Zevk alma hissi", "Kendimi otomatik davranıyor gibi hissetme", "Karar verdiğimi değil, akışta gittiğimi hissetme", "Kendimi durdurmakta zorlanma", "Yoğun haz hissi", "Başarma hissi", "Kendimi ödüllendirmiş hissetme", "Doğru karar verip vermediğimi sorgulama", "İçsel çelişki hissi", "Diğer"], type: "multiple" },
  { text: "Ürünü satın alma işlemi sonrasında duygusal olarak neler hissettiniz? (Birden fazla seçenek işaretleyebilirsiniz.)", options: ["Rahatlama", "Enerji artışı", "Kaygı", "Yorgunluk", "Gerginlik", "Hiçbir değişiklik hissetmedim", "Mutluluk", "Tatmin", "Pişmanlık", "Suçluluk", "Hayal kırıklığı", "Kendimle gurur duyma", "Beklentilerimin karşılandığını hissetme", "Beklentilerimin karşılanmadığını hissetme", "Doğru karar verip vermediğimi sorgulama", "İçsel huzursuzluk", "Boşluk hissi", "Keyfin hızla geçmesi", "Diğer"], type: "multiple" },
  { text: "Bu hisler satın alma kararınızı ne ölçüde etkiledi?", options: ["Hiç etkilemedi", "Az etkiledi", "Orta düzeyde etkiledi", "Oldukça etkiledi", "Çok güçlü etkiledi"], type: "single" }
];

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzogT4LbY2t8Mv3nBhpVBbMwtdrvBqxV3e6HucIfQ6Bb1qxMJljPo-OwqH3TIc_ySl-5g/exec";

let currentIndex = 0;
let answers = [];
let sessionID = '';
let contactEmail = '';
let contactPhone = '';

// DOM Elements
const views = {
  start: document.getElementById('start-view'),
  contact: document.getElementById('contact-view'),
  question: document.getElementById('question-view'),
  result: document.getElementById('result-view')
};

const UI = {
  startBtn: document.getElementById('start-btn'),
  skipContactBtn: document.getElementById('skip-contact-btn'),
  submitContactBtn: document.getElementById('submit-contact-btn'),
  contactEmail: document.getElementById('contact-email'),
  contactPhone: document.getElementById('contact-phone'),

  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  restartBtn: document.getElementById('restart-btn'),

  questionCounter: document.getElementById('question-counter'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  progressBar: document.getElementById('progress-bar'),

  scorePath: document.getElementById('score-circle-path'),
  scoreText: document.getElementById('score-text'),
  totalScore: document.getElementById('total-score'),
  resultCard: document.getElementById('result-card'),
  resultLevel: document.getElementById('result-level'),
  resultDesc: document.getElementById('result-desc'),

  lateContactContainer: document.getElementById('late-contact-container'),
  lateEmail: document.getElementById('late-email'),
  latePhone: document.getElementById('late-phone'),
  lateSubmitBtn: document.getElementById('late-submit-btn'),
  lateFeedback: document.getElementById('late-feedback')
};

function switchView(viewName) {
  Object.values(views).forEach(v => {
    v.classList.remove('active');
  });

  // A small timeout to allow CSS transitions
  setTimeout(() => {
    views[viewName].classList.add('active');
  }, 50);
}

function initQuiz() {
  sessionID = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  currentIndex = 0;
  answers = questions.map(() => null);
  switchView('question');
  renderQuestion();
}

function renderQuestion() {
  const currentQ = questions[currentIndex];

  UI.questionCounter.textContent = `Soru ${currentIndex + 1} / ${questions.length}`;
  UI.questionText.textContent = currentQ.text;

  const progressPercent = ((currentIndex) / questions.length) * 100;
  UI.progressBar.style.width = `${progressPercent}%`;

  UI.optionsContainer.innerHTML = '';

  // Render Options
  currentQ.options.forEach((optionInput, idx) => {
    // If it's a scored question, the option might be an object {text, value}
    const isObject = typeof optionInput === 'object';
    const text = isObject ? optionInput.text : optionInput;
    const value = isObject ? optionInput.value : optionInput;

    const label = document.createElement('label');
    label.className = 'option-label';

    const isMultiple = currentQ.type === 'multiple';
    let isSelected = false;

    if (isMultiple) {
      if (answers[currentIndex] && answers[currentIndex].includes(value)) {
        isSelected = true;
      }
    } else {
      if (answers[currentIndex] === value) {
        isSelected = true;
      }
    }

    if (isSelected) {
      label.classList.add('selected');
    }

    // Support showing different icon for checkbox vs radio (we will use radio styled as radio and checkbox styled as checkbox if we update css, but simple radio design works for both functionally, just change input type)
    label.innerHTML = `
      <input type="${isMultiple ? 'checkbox' : 'radio'}" name="answer" class="option-input" value="${value}" ${isSelected ? 'checked' : ''}>
      <div class="custom-${isMultiple ? 'checkbox' : 'radio'}" style="${isMultiple ? 'border-radius: 4px;' : ''}"></div>
      <span class="option-text">${text}</span>
    `;

    if (text === "Diğer" || text === "Diğer:") {
      // Append an input field if it's "Diğer". We'll just show it textually for now.
      // It could be handled more robustly by expanding a text input, but standard approach is fine.
    }

    label.addEventListener('click', (e) => {
      e.preventDefault();
      handleOptionSelect(value, isMultiple);
    });

    UI.optionsContainer.appendChild(label);
  });

  updateNavButtons();
}

function handleOptionSelect(value, isMultiple) {
  if (isMultiple) {
    let currentAnswers = answers[currentIndex] || [];
    if (currentAnswers.includes(value)) {
      currentAnswers = currentAnswers.filter(v => v !== value);
    } else {
      currentAnswers.push(value);
    }
    // "Hiç kimse", "Harcama yapmıyorum" vb. exception case'leri olabilir ama şimdilik sadece ekleyip çıkarıyoruz
    answers[currentIndex] = currentAnswers.length > 0 ? currentAnswers : null;
  } else {
    answers[currentIndex] = value;
  }

  // Update UI visually
  const labels = UI.optionsContainer.querySelectorAll('.option-label');
  labels.forEach(l => {
    const input = l.querySelector('input');
    if (isMultiple) {
      if (answers[currentIndex] && answers[currentIndex].includes(input.value)) {
        l.classList.add('selected');
        input.checked = true;
      } else {
        l.classList.remove('selected');
        input.checked = false;
      }
    } else {
      if (input.value == answers[currentIndex]) {
        l.classList.add('selected');
        input.checked = true;
      } else {
        l.classList.remove('selected');
        input.checked = false;
      }
    }
  });

  updateNavButtons();

  // Auto-advance only for single selection
  if (!isMultiple) {
    setTimeout(() => {
      handleNext();
    }, 400);
  }
}

function updateNavButtons() {
  UI.prevBtn.disabled = currentIndex === 0;

  // Validation for next
  let isValid = false;
  const currentAnswer = answers[currentIndex];

  if (questions[currentIndex].type === 'multiple') {
    isValid = currentAnswer !== null && currentAnswer.length > 0;
  } else {
    isValid = currentAnswer !== null;
  }

  UI.nextBtn.disabled = !isValid;

  if (currentIndex === questions.length - 1) {
    UI.nextBtn.innerHTML = 'Sonuçları Gör <span class="arrow">→</span>';
  } else {
    UI.nextBtn.innerHTML = 'Sonraki →';
  }
}

function handleNext() {
  if (UI.nextBtn.disabled) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function handlePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function calculateScore() {
  let score = 0;
  questions.forEach((q, idx) => {
    if (q.isScored && answers[idx] !== null) {
      score += parseInt(answers[idx], 10);
    }
  });
  return score;
}

function showResults() {
  UI.progressBar.style.width = '100%';
  switchView('result');

  const score = calculateScore();
  let maxScore = 0;
  questions.forEach(q => {
    if (q.isScored) maxScore += 4;
  }); // 28 * 4 = 112

  UI.totalScore.textContent = score;

  // Calculate level
  let levelClass = '';
  let levelText = '';
  let descText = '';

  UI.resultCard.className = 'result-card'; // Reset

  if (score >= 0 && score <= 28) {
    levelClass = 'level-low';
    levelText = 'Düşük Bağımlılık';
    descText = 'Çevrimiçi alışveriş alışkanlıklarınız kontrol altında görünüyor. Alışverişin hayatınızı veya psikolojinizi olumsuz etkilemediği sağlıklı bir düzeydesiniz.';
  } else if (score >= 29 && score <= 56) {
    levelClass = 'level-medium';
    levelText = 'Orta Seviyede Bağımlılık';
    descText = 'Çevrimiçi alışveriş alışkanlıklarınız riskli bir düzeyde olabilir. Alışverişe ayırdığınız zamanı ve harcamalarınızı gözden geçirmek faydalı olacaktır.';
  } else {
    levelClass = 'level-high';
    levelText = 'Yüksek Bağımlılık';
    descText = 'Çevrimiçi alışveriş alışkanlıklarınız hayatınızı önemli ölçüde olumsuz etkileyen güçlü bir bağımlılığa dönüşmüş olabilir. Bir uzmandan destek almanız önerilir.';
  }

  UI.resultCard.classList.add(levelClass);
  UI.resultLevel.textContent = levelText;
  UI.resultDesc.textContent = descText;

  // Animate circular chart
  setTimeout(() => {
    const percentage = (score / maxScore) * 100;
    UI.scorePath.style.strokeDasharray = `${percentage}, 100`;

    // Animate number count up
    let startTimestamp = null;
    const duration = 1000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      UI.scoreText.textContent = Math.floor(progress * percentage);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);

  }, 300);

  // Kontakt istemi 
  if (!contactEmail && !contactPhone) {
    UI.lateContactContainer.style.display = 'block';
    UI.lateSubmitBtn.disabled = false;
    UI.lateSubmitBtn.textContent = "Bilgilerimi Gönder";
    UI.lateSubmitBtn.style.display = 'block';
    UI.lateFeedback.style.display = 'none';
    UI.lateEmail.value = '';
    UI.latePhone.value = '';
  } else {
    UI.lateContactContainer.style.display = 'none';
  }

  // İlk veriyi Sheets'e gönder
  sendDataToGS(false);
}

// Event Listeners
UI.startBtn.addEventListener('click', () => {
  switchView('contact');
});

UI.skipContactBtn.addEventListener('click', () => {
  contactEmail = '';
  contactPhone = '';
  initQuiz();
});

UI.submitContactBtn.addEventListener('click', () => {
  contactEmail = UI.contactEmail.value.trim();
  contactPhone = UI.contactPhone.value.trim();
  initQuiz();
});

UI.nextBtn.addEventListener('click', handleNext);
UI.prevBtn.addEventListener('click', handlePrev);
UI.restartBtn.addEventListener('click', () => {
  UI.scorePath.style.strokeDasharray = `0, 100`;
  UI.scoreText.textContent = "0";
  setTimeout(() => {
    switchView('start');
  }, 200);
});

UI.lateSubmitBtn.addEventListener('click', () => {
  const e = UI.lateEmail.value.trim();
  const p = UI.latePhone.value.trim();
  if (e || p) {
    contactEmail = e;
    contactPhone = p;
    UI.lateSubmitBtn.disabled = true;
    UI.lateSubmitBtn.textContent = 'Gönderiliyor...';
    sendDataToGS(true);
  }
});

function sendDataToGS(isUpdate) {
  if (!WEB_APP_URL || WEB_APP_URL === "") {
    console.log("Web App URL ayarlanmadı, veriler localde simüle ediliyor.");
    if (isUpdate) {
      UI.lateSubmitBtn.style.display = 'none';
      UI.lateFeedback.style.display = 'block';
      UI.lateFeedback.textContent = "Veriler gönderildi (SİMÜLASYON BAŞARILI, GOOGLE URL EKSİK)";
    }
    return;
  }

  const payload = {
    action: isUpdate ? 'updateContact' : 'newEntry',
    id: sessionID,
    email: contactEmail,
    phone: contactPhone,
    answers: answers,
    totalScore: calculateScore(),
    levelText: UI.resultLevel.textContent
  };

  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  }).then(() => {
    if (isUpdate) {
      UI.lateSubmitBtn.style.display = 'none';
      UI.lateFeedback.style.display = 'block';
      UI.lateFeedback.textContent = "Bilgileriniz başarıyla kaydedildi, teşekkür ederiz!";
    }
    console.log("Veri Google Sheets'e iletildi.");
  }).catch(err => console.error("Veri gönderilirken hata:", err));
}

export type Brand = {
  image: string;
  slug: string;
  brandName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  services: string[];
  commonProblems: string[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
};

export const brands: Brand[] = [
  {
    slug: "bmw-ozel-servis-bursa",
    image: "/images/brand-bmw.png",
    brandName: "BMW",
    seoTitle: "BMW Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "BMW özel servis Bursa Nilüfer arayanlar için arıza tespit, bakım, mekanik onarım ve teknik servis yaklaşımıyla ERZ GARAGE.",
    h1: "BMW Özel Servis Bursa Nilüfer",
    intro:
      "BMW araçlarda sürüş karakteri, motor davranışı ve elektronik sistemler hassas yaklaşım ister. ERZ GARAGE, BMW özel servis Bursa arayan kullanıcılar için teknik servis odaklı destek sunar.",
    services: ["Arıza tespit", "Periyodik bakım", "Fren kontrolü", "Mekanik onarım", "Oto elektrik"],
    commonProblems: [
      "Motor arıza lambası ve sensör uyarıları",
      "Çekiş düşüklüğü veya düzensiz çalışma",
      "Fren ve süspansiyon kaynaklı sürüş hissi değişimleri",
      "Akü, şarj ve elektronik uyarılar"
    ],
    whyChooseUs: [
      "BMW araçlara uygun özel servis yaklaşımı",
      "Bakım ve arıza tespiti arasında net yönlendirme",
      "Bursa Nilüfer’de hızlı iletişim ve yol yardım bağlantısı"
    ],
    faqs: [
      {
        question: "ERZ GARAGE BMW yetkili servisi mi?",
        answer:
          "Hayır. ERZ GARAGE, BMW araçlara yönelik özel servis yaklaşımıyla çalışan bağımsız bir işletmedir."
      },
      {
        question: "BMW arıza lambası yandığında ne yapmalıyım?",
        answer:
          "Aracı zorlamadan durumu değerlendirip bizi aramanız önerilir. Gerekirse arıza tespit veya yol yardım yönlendirmesi yapılır."
      }
    ]
  },
  {
    slug: "mercedes-benz-ozel-servis-bursa",
    image: "/images/brand-mercedes.png",
    brandName: "Mercedes-Benz",
    seoTitle: "Mercedes-Benz Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Mercedes-Benz özel servis Bursa Nilüfer arayanlar için bakım, arıza tespit, mekanik onarım ve teknik servis desteği sunan ERZ GARAGE.",
    h1: "Mercedes-Benz Özel Servis Bursa Nilüfer",
    intro:
      "Mercedes-Benz araçlar için bakım ve arıza tespit süreçlerinde konfor, sürüş dengesi ve sistem bütünlüğü birlikte değerlendirilmelidir.",
    services: ["Periyodik bakım", "Arıza tespit", "Şanzıman kontrolü", "Fren servisi", "Oto elektrik"],
    commonProblems: [
      "Elektronik uyarılar ve sensör kaynaklı bildirimler",
      "Şanzıman geçişlerinde hissedilen düzensizlikler",
      "Konfor sistemleri ve klima ile ilgili elektrik arızaları",
      "Bakım periyodu ihmaline bağlı performans düşüşleri"
    ],
    whyChooseUs: [
      "Mercedes-Benz araçlar için teknik servis hizmeti yaklaşımı",
      "Sürüş konforunu etkileyen detaylara odaklanan kontrol",
      "Nilüfer oto servis içinde erişilebilir iletişim"
    ],
    faqs: [
      {
        question: "Mercedes-Benz için hangi hizmetler öne çıkıyor?",
        answer:
          "Periyodik bakım, arıza tespit, fren sistemi, şanzıman değerlendirmesi ve oto elektrik başlıkları sık talep edilen hizmetlerdir."
      },
      {
        question: "Mercedes-Benz bakımında erken kontrol neden önemli?",
        answer:
          "Belirtiler erken değerlendirildiğinde daha büyük arızaların önüne geçmek daha kolay olabilir."
      }
    ]
  },
  {
    slug: "range-rover-ozel-servis-bursa",
    image: "/images/brand-bmw.png",
    brandName: "Range Rover",
    seoTitle: "Range Rover Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Range Rover özel servis Bursa Nilüfer arayanlar için arıza tespit, periyodik bakım, mekanik onarım ve teknik kontrol desteği.",
    h1: "Range Rover Özel Servis Bursa Nilüfer",
    intro:
      "Range Rover araçlarda konfor, arazi karakteri, süspansiyon sistemi ve elektronik kontroller birlikte değerlendirilmelidir. ERZ GARAGE, Range Rover özel servis Bursa arayan kullanıcılar için net servis yönlendirmesi sunar.",
    services: ["Arıza tespit", "Periyodik bakım", "Süspansiyon kontrolü", "Oto elektrik", "Mekanik onarım"],
    commonProblems: [
      "Elektronik uyarılar ve sensör bildirimleri",
      "Süspansiyon ve yürüyen aksam kaynaklı konfor değişimleri",
      "Akü, şarj ve elektrik sistemi problemleri",
      "Bakım gecikmesine bağlı performans ve sürüş hissi değişimleri"
    ],
    whyChooseUs: [
      "Range Rover araç karakterine uygun teknik değerlendirme",
      "Arıza tespit ve bakım ihtiyacını netleştiren servis akışı",
      "Bursa Nilüfer’de hızlı iletişim ve yol yardım desteği"
    ],
    faqs: [
      {
        question: "ERZ GARAGE Range Rover yetkili servisi mi?",
        answer:
          "Hayır. ERZ GARAGE, Range Rover araçlara yönelik özel servis yaklaşımıyla çalışan bağımsız bir oto servis işletmesidir."
      },
      {
        question: "Range Rover araçlarda hangi kontroller öne çıkar?",
        answer:
          "Arıza tespit, süspansiyon kontrolü, oto elektrik, periyodik bakım ve mekanik onarım başlıkları öne çıkar."
      }
    ]
  },
  {
    slug: "mini-cooper-ozel-servis-bursa",
    image: "/images/brand-audi.png",
    brandName: "Mini Cooper",
    seoTitle: "Mini Cooper Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Mini Cooper özel servis Bursa Nilüfer arayanlar için arıza tespit, bakım, fren, oto elektrik ve mekanik onarım desteği.",
    h1: "Mini Cooper Özel Servis Bursa Nilüfer",
    intro:
      "Mini Cooper araçlarda kompakt yapı, sürüş karakteri ve elektronik sistemler bakım sürecinde birlikte değerlendirilmelidir. ERZ GARAGE, Mini Cooper özel servis Bursa arayışına teknik servis yaklaşımıyla cevap verir.",
    services: ["Arıza tespit", "Periyodik bakım", "Yağ değişimi", "Fren kontrolü", "Oto elektrik"],
    commonProblems: [
      "Motor arıza lambası ve sensör uyarıları",
      "Düzensiz çalışma veya çekiş düşüklüğü",
      "Fren ve süspansiyon kaynaklı sürüş hissi değişimleri",
      "Akü ve elektrik sistemi uyarıları"
    ],
    whyChooseUs: [
      "Mini Cooper araçlara uygun özel servis yaklaşımı",
      "Bakım, arıza tespit ve mekanik onarımı birlikte değerlendiren süreç",
      "Nilüfer oto servis içinde hızlı iletişim ve randevu yönlendirmesi"
    ],
    faqs: [
      {
        question: "Mini Cooper bakımında hangi işlemler önemlidir?",
        answer:
          "Yağ ve filtre bakımı, fren kontrolü, arıza tespit, oto elektrik ve genel mekanik kontrol düzenli takip edilmelidir."
      },
      {
        question: "Mini Cooper arıza lambası yandığında ne yapılmalı?",
        answer:
          "Aracı zorlamadan teknik kontrol için iletişime geçmeniz önerilir. Gerekirse arıza tespit veya yol yardım yönlendirmesi yapılır."
      }
    ]
  },
  {
    slug: "audi-ozel-servis-bursa",
    image: "/images/brand-audi.png",
    brandName: "Audi",
    seoTitle: "Audi Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Audi özel servis Bursa Nilüfer arayanlar için bakım, arıza tespit, fren, oto elektrik ve mekanik onarım desteği sunan ERZ GARAGE.",
    h1: "Audi Özel Servis Bursa Nilüfer",
    intro:
      "Audi araçlarda bakım ve onarım süreçlerinde hem performans hem sürüş konforu açısından dengeli teknik değerlendirme gerekir.",
    services: ["Arıza tespit", "Periyodik bakım", "Yağ değişimi", "Fren tamiri", "Mekanik onarım"],
    commonProblems: [
      "Arıza lambaları ve sürüş moduna etki eden uyarılar",
      "Elektrik ve sensör kaynaklı düzensiz çalışma belirtileri",
      "Fren sistemi veya süspansiyon kaynaklı konfor sorunları",
      "Düzenli bakım ihtiyacına bağlı performans değişimleri"
    ],
    whyChooseUs: [
      "Audi araçlar için bakım ve onarım desteğine odaklı yaklaşım",
      "Servis ihtiyacını netleştiren arıza tespit akışı",
      "Bursa oto tamir arayan Audi kullanıcıları için hızlı ve net servis yönlendirmesi"
    ],
    faqs: [
      {
        question: "Audi araçlarda arıza tespit neden önemli?",
        answer:
          "Elektronik sistem yoğunluğu nedeniyle doğru teşhis, sorunun kaynağını bulmak için kritik önemdedir."
      },
      {
        question: "Audi bakımında hangi başlıklar öne çıkar?",
        answer:
          "Yağ ve filtre bakımları, fren kontrolleri, oto elektrik değerlendirmeleri ve genel arıza tespit süreci öne çıkar."
      }
    ]
  }
];

export const brandsBySlug = Object.fromEntries(brands.map((brand) => [brand.slug, brand]));

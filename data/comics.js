// data/comics.js

const COMICS_DATA = [
  {
    id: "c1",
    order: 1,
    title: "Apotheosis",
    author: "San Ren Xi",
    genres: ["Action", "Fantasy", "Martial Arts"],
    synopsis: "Apotheosis menceritakan perjalanan seorang pemuda yang awalnya biasa saja namun kemudian menemukan kekuatan luar biasa yang mengubah hidupnya secara drastis. Dalam prosesnya, dia harus menghadapi berbagai musuh serta tantangan yang menguji ketangguhan dan tekadnya untuk meraih puncak kekuatan sejati. Cerita ini juga menggambarkan konflik batin sang tokoh utama dalam memahami arti kekuatan sejati dan tanggung jawabnya terhadap dunia. Seiring perjalanan, ia bertemu dengan berbagai karakter yang memperluas wawasannya dan membantunya mengatasi rintangan demi rintangan hingga akhirnya mencapai tingkat pencerahan tertinggi.",
    cover: "../assets/img/Apotheosis.jpg",
    popular: true,
    isPremium: true // Premium
  },
  {
    id: "c2",
    order: 2,
    title: "Demon Evolution",
    author: "Kim Hyung Min",
    genres: ["Action", "Adventure", "Fantasy", "Demons"],
    synopsis: "Cerita ini mengikuti perjalanan seorang pemuda yang tiba-tiba mendapatkan kekuatan setan setelah sebuah insiden misterius. Dengan kekuatan barunya, dia harus belajar mengendalikan sisi gelap dalam dirinya sambil menghadapi ancaman dari makhluk supernatural yang mengincarnya. Selama perjalanan, ia bertemu dengan berbagai sekutu dan musuh yang membuatnya meragukan tujuan aslinya. Konflik batin dan pertarungan epik menjadi inti dari perjuangannya mempertahankan kemanusiaan sekaligus menggali misteri di balik asal usul kekuatan setannya.",
    cover: "../assets/img/Demon Evolution.jpg",
    popular: true,
    isPremium: false // Gratis
  },
  {
    id: "c3",
    order: 3,
    title: "Master of Legendary Realms",
    author: "Mei Lin",
    genres: ["Adventure", "Action", "Fantasy", "Romance"],
    synopsis: "Master of Legendary Realms mengikuti kisah seorang pemuda yang tanpa sengaja memasuki dunia lain penuh makhluk mistis dan tantangan legendaris. Dia harus memahami kekuatan baru yang dimilikinya sambil mencari jalan untuk kembali ke dunianya. Dalam perjalanannya, dia bertemu dengan berbagai karakter unik yang membantunya tumbuh dan menghadapi berbagai konflik yang menguji tekad dan kemampuannya. Seiring waktu, pemuda ini mulai menyadari bahwa takdirnya jauh lebih besar daripada yang pernah dia bayangkan, menghubungkannya dengan legenda-legenda kuno dan kekuatan yang bisa mengubah dunia. Petualangan dan drama yang berbuah pada pertumbuhan karakter menjadi fokus utama cerita ini, menjadikannya sebuah perjalanan epik yang penuh dengan kejutan dan pembelajaran. Dunia fantastis yang kaya dengan kebudayaan serta unsur magis memberikan sensasi tersendiri bagi pembaca yang mencari cerita dengan kedalaman dan dinamika yang kuat.",
    cover: "../assets/img/Master of Legendary Realms.jpg",
    popular: false,
    isPremium: false // Gratis
  },
  {
    id: "c4",
    order: 4,
    title: "Battle Through the Heavens",
    author: "Tian Can Tu Dou",
    genres: ["Adventure", "Action", "Comedy", "Romance"],
    synopsis: "Cerita ini mengikuti perjalanan Xiao Yan yang dulunya jenius bela diri tapi tiba-tiba kehilangan kekuatannya. Meski dipandang sebelah mata oleh orang di sekitarnya, ia bertekad untuk mengembalikan kejayaannya dan membuktikan bahwa dia lebih dari sekadar masa lalu yang kelam. Dalam perjalanannya, Xiao Yan menghadapi berbagai musuh dan tantangan yang menguji kemampuannya secara total. Di dunia yang penuh dengan seni bela diri dan kekuatan mistis tersebut, Xiao Yan menggali rahasia di balik jatuh bangunnya serta membentuk aliansi baru. Tidak hanya berfokus pada kekuatan, dia juga belajar arti sejati dari persahabatan dan keberanian yang membawanya melewati ujian demi ujian yang semakin berat.",
    cover: "../assets/img/Battle Through the Heavens.jpg",
    popular: true,
    isPremium: true // Premium
  },
  {
    id: "c5",
    order: 5,
    title: "Magic Emperor",
    author: "Rui Tsukiyo",
    genres: ["Fantasy", "Action", "Adventure", "Magic"],
    synopsis: "Magic Emperor menceritakan tentang kisah seorang pemuda yang terlahir kembali dengan keahlian sihir tingkat tinggi di dunia fantasi yang dipenuhi dengan konflik dan intrik politik. Dengan kekuatan sihir yang luar biasa, ia berusaha membangun kekaisaran yang damai sekaligus menghadapi berbagai ancaman baik dari dalam maupun luar kerajaannya. Dalam perjalanannya, sang Kaisar tidak hanya bertarung menghadapi musuh, tetapi juga menggali misteri masa lalu serta berusaha memahami arti kekuasaan dan tanggung jawab. Cerita ini penuh dengan aksi epik, strategi cerdas, dan pengembangan karakter yang dalam, memperlihatkan bagaimana ia tumbuh menjadi pemimpin sejati.",
    cover: "../assets/img/Magic Emperor.jpg",
    popular: false,
    isPremium: true // Premium
  },
  {
    id: "c6",
    order: 6,
    title: "Age of Terror",
    author: "Jean-Pierre Dionnet",
    genres: ["Action", "Drama", "Fantasy", "Horror"],
    synopsis: "Komik Age of Terror mengisahkan perjuangan sekelompok pahlawan yang menghadapi ancaman teror global di masa depan. Mereka harus bersatu dan menggunakan keahlian unik masing-masing untuk mengungkap konspirasi besar yang mengancam kedamaian dunia. Dalam prosesnya, mereka menemukan bahwa musuh terbesar bukan hanya teroris, tetapi juga kekuatan tersembunyi yang berusaha mengendalikan dunia dari balik layar. Konflik yang terjadi memaksa para tokoh utama merenungkan nilai keberanian dan pengorbanan dalam menghadapi bahaya yang tak terduga. Setiap langkah mereka penuh risiko, namun tekad untuk menjaga keamanan dan harapan bagi generasi mendatang terus mendorong mereka maju. Komik ini menyajikan perpaduan aksi seru dan drama emosional yang menggambarkan kompleksitas global di era modern.",
    cover: "../assets/img/Age of Terror.jpg",
    popular: true,
    isPremium: false // Gratis
  },
  {
    id: "c7",
    order: 7,
    title: "Spirit Sword Sovereign",
    author: "Wang Lee",
    genres: ["Fantasy", "Action", "Adventure", "Romance"],
    synopsis: "Cerita mengikuti perjalanan seorang pemuda berbakat yang menemukan pedang roh legendaris yang memberinya kekuatan luar biasa. Dengan kemampuan baru tersebut, dia bertekad melindungi dunia dari ancaman kegelapan yang mulai menyerang kerajaan tempat tinggalnya. Dalam perjalanannya, ia menghadapi berbagai musuh kuat dan menemukan rahasia tentang asal-usul pedang tersebut serta takdir yang menunggu dirinya. Tidak hanya pertarungan, perjalanan ini juga menunjukkan pertumbuhan pribadi sang tokoh utama, dari yang awalnya ragu hingga menjadi pemimpin yang bijaksana. Bersama sekutu yang diperoleh selama perjalanan, ia berusaha menyatukan dunia yang terpecah akibat konflik dan intrik politik demi menciptakan perdamaian abadi.",
    cover: "../assets/img/Spirit Sword Sovereign.jpg",
    popular: false,
    isPremium: true // Premium
  },
];

const ALL_GENRES = ["Romance", "Fantasy", "Action", "Drama", "Historical"];

// Mengurutkan data berdasarkan 'order' (ascending)
const SORTED_COMICS = COMICS_DATA.sort((a, b) => a.order - b.order);

export { SORTED_COMICS as COMICS, ALL_GENRES };
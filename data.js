/*
  КАТАЛОГ РАБОТ — реальные картины, распределены по категориям.
  featured: true — эта картина показывается на главной странице
  как представитель своей категории (выбрано мной по одной на категорию).
*/

const PAINTINGS = [
  {
    id: "zhenshchiny-1",
    title: "Фигура",
    category: "Женщины",
    medium: "масло, холст на подрамнмке",
    size: "50 × 50см",
    price: null,
    status: "sold",
    featured: true,
    image: "images/zhenshchiny-1.jpg"
  },
  {
    id: "zhivotnye-1",
    title: "La perla",
    category: "Животные",
    medium: "акварель, бумага",
    size: "15 × 20см",
    price: 5000,
    status: "available",
    featured: true,
    image: "images/zhivotnye-1.jpg"
  },
  {
    id: "zhivotnye-2",
    title: "Овечка",
    category: "Животные",
    medium: "масло, бумага",
    size: "15 × 21см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/zhivotnye-2.jpg"
  },
  {
    id: "zhivotnye-3",
    title: "Рита",
    category: "Животные",
    medium: "масло, холст на картоне",
    size: "30 × 30см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/zhivotnye-3.jpg"
  },
  {
    id: "memy-1",
    title: "Влюбленная кошка когти не выпускает",
    category: "Смеха ради",
    medium: "акварель, туш, бумага",
    size: "20 × 30см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/memy-1.jpg"
  },
  {
    id: "memy-2",
    title: "Мужик",
    category: "Смеха ради",
    medium: "масло, холст на подрамнике",
    size: "40 × 50 см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/memy-2.jpg"
  },
  {
    id: "memy-3",
    title: "Сдулась",
    category: "Смеха ради",
    medium: "масляная пастель, бумага",
    size: "30 × 40 см",
    price: 17000,
    status: "available",
    featured: true,
    image: "images/memy-3.jpg"
  },
  {
    id: "memy-4",
    title: "Сегодня",
    category: "Смеха ради",
    medium: "масло, холст на подрамнике",
    size: "20 × 30 см",
    price: 18000,
    status: "available",
    featured: false,
    image: "images/memy-4.jpg"
  },
  {
    id: "memy-5",
    title: "Собчачка в синем свитере",
    category: "Животные",
    medium: "масляная пастель, бумага",
    size: "30 × 40см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/memy-5.jpg"
  },
  {
    id: "natyurmort-1",
    title: "Нарциссы в горшке",
    category: "Натюрморты",
    medium: "масло, холст на картоне",
    size: "20 × 30см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/natyurmort-1.jpg"
  },
  {
    id: "natyurmort-2",
    title: "Натюрморт с дыней и цветами",
    category: "Натюрморты",
    medium: "масляная пастель, бумага",
    size: "30 × 40см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/natyurmort-2.jpg"
  },
  {
    id: "natyurmort-3",
    title: "Натюрморт с зеленой бутылкой и мимозой",
    category: "Натюрморты",
    medium: "масло, бумага",
    size: "15 × 21см",
    price: 12000,
    status: "available",
    featured: true,
    image: "images/natyurmort-3.jpg"
  },
  {
    id: "natyurmort-4",
    title: "Цветы в вазе",
    category: "Натюрморты",
    medium: "масляная пастель, крафт",
    size: "20 × 30см",
    price: 7000,
    status: "available",
    featured: false,
    image: "images/natyurmort-4.jpg"
  },
  {
    id: "peterburg-1",
    title: "Вид на Ковенский",
    category: "Петербург",
    medium: "масло, холст на картоне",
    size: "15 × 15см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/peterburg-1.jpg"
  },
  {
    id: "peterburg-2",
    title: "Вид на Лиговский",
    category: "Петербург",
    medium: "масляная пастель, крафт",
    size: "20 × 30 см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/peterburg-2.jpg"
  },
  {
    id: "peterburg-3",
    title: "Закат",
    category: "Петербург",
    medium: "масляная пастель, бумага",
    size: "20 × 30 см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/peterburg-3.jpg"
  },
  {
    id: "peterburg-4",
    title: "Красный угол",
    category: "Петербург",
    medium: "масло, бумага",
    size: "15 × 21см",
    price: 7000,
    status: "available",
    featured: false,
    image: "images/peterburg-4.jpg"
  },
  {
    id: "peterburg-5",
    title: "Крыши Петербурга",
    category: "Петербург",
    medium: "масло, холст на картоне",
    size: "20 × 30 см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/peterburg-5.jpg"
  },
  {
    id: "peterburg-6",
    title: "Особняк Мясникова зимой",
    category: "Петербург",
    medium: "масло, холст на подрамнике",
    size: "30 × 30см",
    price: 9000,
    status: "available",
    featured: true,
    image: "images/peterburg-6.jpg"
  },
  {
    id: "peterburg-7",
    title: "Соляной переулок",
    category: "Петербург",
    medium: "масло, бумага",
    size: "15 × 20см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/peterburg-7.jpg"
  },
  {
    id: "tsvety-i-travy-1",
    title: "Безмятежность",
    category: "Цветы и травы",
    medium: "масло, холст на подрамнике",
    size: "40 × 70 см",
    price: 27000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-1.jpg"
  },
  {
    id: "tsvety-i-travy-10",
    title: "Туман после дождя",
    category: "Цветы и травы",
    medium: "масло, бумага",
    size: "15 × 15см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/tsvety-i-travy-10.jpg"
  },
  {
    id: "tsvety-i-travy-11",
    title: "Цветущий луг",
    category: "Цветы и травы",
    medium: "масляная пастель, крафт",
    size: "75 × 55 см",
    price: 55000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-11.jpg"
  },
  {
    id: "tsvety-i-travy-12",
    title: "Цветущий сад",
    category: "Цветы и травы",
    medium: "Масляная пастель, крафт",
    size: "20 × 30см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/tsvety-i-travy-12.jpg"
  },
  {
    id: "tsvety-i-travy-13",
    title: "Камни в воде",
    category: "Цветы и травы",
    medium: "масляная пастель, крафт",
    size: "21 × 15 см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-13.jpg"
  },
  {
    id: "tsvety-i-travy-14",
    title: "Цветущее поле",
    category: "Цветы и травы",
    medium: "масло, холст на подрамнике",
    size: "70 × 90см",
    price: 65000,
    status: "available",
    featured: true,
    image: "images/tsvety-i-travy-14.jpeg"
  },
  {
    id: "tsvety-i-travy-2",
    title: "Босиком по траве",
    category: "Цветы и травы",
    medium: "масло, холст на подрамнике",
    size: "80 × 80 см",
    price: 60000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-2.jpg"
  },
  {
    id: "tsvety-i-travy-3",
    title: "Гортензии 1",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "9 × 14см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/tsvety-i-travy-3.jpg"
  },
  {
    id: "tsvety-i-travy-4",
    title: "Недосказанность",
    category: "Цветы и травы",
    medium: "масло, бумага",
    size: "15 × 21 см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-4.jpg"
  },
  {
    id: "tsvety-i-travy-5",
    title: "Поле подсолнухов",
    category: "Цветы и травы",
    medium: "масляная пастель, крафт",
    size: "20 × 30 см",
    price: 8000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-5.jpg"
  },
  {
    id: "tsvety-i-travy-6",
    title: "Пушица",
    category: "Цветы и травы",
    medium: "масляная пастель, крафт",
    size: "20 × 30см",
    price: 7000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-6.jpg"
  },
  {
    id: "tsvety-i-travy-7",
    title: "Свет сквозь деревья",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "30 × 40 см",
    price: 15000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-7.jpg"
  },
  {
    id: "tsvety-i-travy-8",
    title: "Травы",
    category: "Цветы и травы",
    medium: "масляная пастель, картон",
    size: "10 × 30см",
    price: null,
    status: "sold",
    featured: false,
    image: "images/tsvety-i-travy-8.jpg"
  },
  {
    id: "tsvety-i-travy-9",
    title: "Три увядающих ириса",
    category: "Цветы и травы",
    medium: "масло, бумага",
    size: "20 × 30 см",
    price: 5000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-9.jpg"
  },
  {
    id: "svety-i-travy-15",
    title: "Самые вкусные яблоки",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "30 × 40 см",
    price: 21000,
    status: "available",
    featured: false,
    image: "images/tsvety-i-travy-15.jpeg"
  },
  {
    id: "yablonya",
    title: "Яблоня",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "14 × 21 см",
    price: 12000,
    status: "available",
    featured: false,
    image: "images/yablonya.jpeg"
  },
  {
    id: "beliy-lebed",
    title: "Белый лебедь на синей воде",
    category: "Животные",
    medium: "масляная пастель, бумага",
    size: "23 × 17 см",
    price: 8000,
    status: "available",
    featured: false,
    image: "images/beliy-lebed.jpeg"
  },
  {
    id: "malchik",
    title: "Мальчик",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "30 × 30 см",
    price: 9000,
    status: "available",
    featured: false,
    image: "images/malchik.jpg"
  },
  {
    id: "osenniy-potseluy",
    title: "Осенний поцелуй",
    category: "Цветы и травы",
    medium: "масляная пастель, бумага",
    size: "25 × 20 см",
    price: 9000,
    status: "available",
    featured: false,
    image: "images/osenniy-potseluy.jpg"
  },
];

const CATEGORY_ORDER = ["Женщины", "Животные", "Смеха ради", "Натюрморты", "Петербург", "Цветы и травы"];
const HOME_ORDER = ["Петербург", "Женщины", "Животные", "Смеха ради", "Натюрморты", "Цветы и травы"];
const BACKGROUND_IMAGES = [
  "images/tsvety-i-travy-1.jpg"
];

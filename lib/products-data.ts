export type ProductStatus = 'available' | 'limited' | 'out'
export type ProductCategory = 'cow-hard' | 'cow-blue' | 'goat' | 'butter' | 'sauce' | 'drink' | 'set'
export type MilkType = 'cow' | 'goat' | 'mixed'

export interface Product {
  slug: string
  title: string
  titleEn?: string
  category: ProductCategory[]
  milkType: MilkType
  price: number
  priceUnit: string
  status: ProductStatus
  badges: string[]
  shortDescription: string
  longDescription: string
  production?: string
  pairing: string[]
  images: string[]
  weight?: string
  ageing?: string
  featured?: boolean
}

export const products: Product[] = [
  // Cheese Sets
  {
    slug: 'mu-set',
    title: 'Сирний сет "Му"',
    titleEn: 'Mu Cheese Set',
    category: ['set'],
    milkType: 'cow',
    price: 486,
    priceUnit: 'грн',
    status: 'available',
    badges: ['Хіт продажів', 'Асорті 9 сирів'],
    shortDescription: 'Дев\'ять найкращих коров\'ячих сирів в одному наборі',
    longDescription: 'Ідеальний набір для знайомства з усією палітрою наших коров\'ячих сирів. Містить 9 різних сортів, кожен зі своїм унікальним характером та історією. Від ніжного Монблану до димного Рамсеса - справжня подорож світом сирів.',
    pairing: ['Червоне вино', 'Мостарда яблучна', 'Свіжий хліб'],
    images: ['/images/products/cheese-set-mu.jpg'],
    featured: true
  },
  {
    slug: 'mie-set',
    title: 'Сирний сет "Мє"',
    titleEn: 'Mie Cheese Set',
    category: ['set'],
    milkType: 'goat',
    price: 576,
    priceUnit: 'грн',
    status: 'available',
    badges: ['Козині сири', 'Асорті 6 сирів'],
    shortDescription: 'Шість витончених козиних сирів',
    longDescription: 'Колекція з 6 найкращих козиних сирів нашої ферми. Від молодих свіжих до витриманих у вині - кожен сир розкриває унікальний смак козиного молока від наших кіз породи Заанен та Нубіан.',
    pairing: ['Біле вино', 'Мед', 'Горіхи'],
    images: ['/images/products/cheese-set-goat.jpg'],
    featured: true
  },

  // Cow's Milk Hard Cheeses
  {
    slug: 'cheddar',
    title: 'Чеддер',
    titleEn: 'Cheddar',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Класика', 'Ручний чеддерінг'],
    shortDescription: 'Традиційний чеддер XVII століття з 4-годинним ручним чеддерінгом',
    longDescription: 'Мій Чеддер виготовляється за стандартами Джеймса Гардінга, англійського сировара XVII століття. Ручний процес "чеддерінгу" триває 4 години - я власноруч перевертаю та складаю сирну масу, щоб досягти ідеальної текстури. Результат - насичений, злегка гострий смак з горіховими нотками.',
    production: 'Ручний чеддерінг протягом 4 годин. Витримка від 3 місяців.',
    pairing: ['Мостарда яблучна', 'Червоне сухе вино', 'Крафтове пиво'],
    images: ['/images/products/cheese-cheddar.jpg'],
    ageing: '3-12 місяців',
    featured: true
  },
  {
    slug: 'lichtenfeld',
    title: 'Ліхтенфельд',
    titleEn: 'Lichtenfeld (Gruyère)',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Швейцарський рецепт', '800+ років традиції'],
    shortDescription: 'Наш фірмовий сир за 800-річним швейцарським рецептом Грюйєр',
    longDescription: 'Цей сир - серце нашої ферми, названий на її честь. Виготовляється за автентичним рецептом швейцарського Грюйєра, якому понад 800 років. Складний, багатошаровий смак з нотками карамелі, горіхів та фруктів. Ідеальний як для фондю, так і для самостійного споживання.',
    production: 'Традиційна швейцарська технологія. Витримка в натуральних умовах.',
    pairing: ['Біле сухе вино', 'Груші', 'Волоські горіхи'],
    images: [
      '/images/products/cheese-lichtenfeld-gruyere-1.jpg',
      '/images/products/cheese-lichtenfeld-gruyere-2.jpg',
      '/images/products/cheese-lichtenfeld-gruyere-4.jpg',
      '/images/products/cheese-lichtenfeld-gruyere-5.jpg'
    ],
    ageing: '6-18 місяців',
    featured: true
  },
  {
    slug: 'monblan',
    title: 'Монблан',
    titleEn: 'Monblan (Emmentaler)',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Альпійський', 'З дірочками'],
    shortDescription: 'Класичний швейцарський Емменталь з характерними дірочками',
    longDescription: 'Справжній альпійський сир з великими круглими дірочками - результат природної ферментації. М\'який, солодкуватий смак з легкими горіховими нотками. Ідеальний для сендвічів та запікання.',
    production: 'Спеціальна закваска для формування характерних дірочок.',
    pairing: ['Легке пиво', 'Виноград', 'Свіжі овочі'],
    images: ['/images/products/cheese-monblan-emmentaler.jpg'],
    ageing: '4-12 місяців'
  },
  {
    slug: 'yaroslav',
    title: 'Ярослав',
    titleEn: 'Yaroslav (Jarlsberg)',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Норвезький стиль', 'Витриманий'],
    shortDescription: 'Твердий витриманий сир у норвезькому стилі Ярлсберг',
    longDescription: 'Наша інтерпретація знаменитого норвезького Ярлсберга. Напівтвердий сир з характерними великими дірочками та м\'яким, злегка солодкуватим смаком. Чудово плавиться, що робить його ідеальним для гарячих страв.',
    pairing: ['Світле пиво', 'Яблука', 'Мостарда'],
    images: ['/images/products/cheese-yaroslav-jarlsberg.jpg'],
    ageing: '3-6 місяців'
  },
  {
    slug: 'ramses',
    title: 'Рамсес',
    titleEn: 'Ramses',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'limited',
    badges: ['Копчений', 'Обмежена партія', 'Унікальний'],
    shortDescription: 'Копчений 14 діб на вишні та абрикосі',
    longDescription: 'Унікальний копчений сир, названий на честь великого фараона. Коптимо протягом 14 діб на вишневій та абрикосовій тріщі. Результат - неймовірний димний аромат з фруктовими нотками. Кожна головка - це маленький витвір мистецтва.',
    production: 'Холодне копчення 14 діб на фруктовій деревині.',
    pairing: ['Червоне вино', 'Копчене м\'ясо', 'Темний хліб'],
    images: [
      '/images/products/cheese-ramses-smoked-1.jpg',
      '/images/products/cheese-ramses-smoked-2.jpg'
    ],
    ageing: '2 місяці + 14 діб копчення',
    featured: true
  },
  {
    slug: 'cabernet',
    title: 'Каберне',
    titleEn: 'Cabernet (Ubriaco)',
    category: ['cow-hard'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'limited',
    badges: ['У вині', 'Обмежена партія', 'Авторський'],
    shortDescription: 'Грюйєр, витриманий у власному вині Каберне',
    longDescription: 'Наш Грюйєр, вимочений у домашньому вині Каберне. Традиція Ubriaco ("п\'яного сиру") з Італії, адаптована до українського терруару. Вино надає сиру рубіновий колір скоринки та унікальний фруктово-танінний присмак.',
    production: 'Витримка у вині протягом 4-6 тижнів з щоденним перевертанням.',
    pairing: ['Каберне', 'Темний виноград', 'Інжир'],
    images: ['/images/products/cheese-cabernet-ubriaco.jpg'],
    ageing: '3 місяці + 1 місяць у вині'
  },

  // Blue Cheeses
  {
    slug: 'albion',
    title: 'Альбіон',
    titleEn: 'Albion (Stilton)',
    category: ['cow-blue'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Блакитна пліснява', 'Англійський стиль'],
    shortDescription: 'Традиційний сир з блакитною пліснявою у стилі Стілтон',
    longDescription: 'Король англійських сирів у нашому виконанні. Кремова текстура з прожилками благородної блакитної плісняви Penicillium roqueforti. Насичений, злегка гострий смак з солодкуватим післясмаком.',
    production: 'Засів спорами блакитної плісняви, проколювання для аерації.',
    pairing: ['Портвейн', 'Мед', 'Груші'],
    images: ['/images/products/cheese-albion-stilton.jpg'],
    ageing: '2-4 місяці'
  },
  {
    slug: 'cambozola',
    title: 'Камбоцола',
    titleEn: 'Cambozola',
    category: ['cow-blue'],
    milkType: 'cow',
    price: 54,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Три культури', 'Кремовий'],
    shortDescription: 'М\'який кремовий сир з трьома культурами плісняви',
    longDescription: 'Унікальне поєднання трьох культур благородної плісняви створює неповторний букет смаку. Ніжна кремова текстура з м\'яким, але виразним смаком. Ідеальний вибір для тих, хто тільки знайомиться з блакитними сирами.',
    production: 'Потрійне засівання різними культурами плісняви.',
    pairing: ['Солодке вино', 'Волоські горіхи', 'Сушені фрукти'],
    images: ['/images/products/cheese-cambozola.jpg'],
    ageing: '6-8 тижнів'
  },

  // Goat Cheeses
  {
    slug: 'garrotxa',
    title: 'Гарроча',
    titleEn: 'Garrotxa',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Каталонський стиль', 'Витриманий'],
    shortDescription: 'Традиційний каталонський козиний сир',
    longDescription: 'Автентичний каталонський козиний сир від наших кіз породи Заанен та Нубіан. Тверда текстура з ніжним горіховим смаком без типової козиної гостроти. Покритий натуральною сірою пліснявою.',
    pairing: ['Сухе біле вино', 'Мигдаль', 'Оливки'],
    images: ['/images/products/goat-cheese-garrocha.jpg'],
    ageing: '2-3 місяці'
  },
  {
    slug: 'baby-fumado',
    title: 'Бебі Фумадо',
    titleEn: 'Baby Fumado',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Копчений', 'Маленькі головки'],
    shortDescription: 'Маленькі головки козиного сиру, холодного копчення 2 тижні',
    longDescription: 'Мініатюрні головки козиного сиру холодного копчення. Димний аромат ідеально балансує з ніжним козиним смаком. Каталонська традиція в українському виконанні.',
    production: 'Холодне копчення протягом 2 тижнів.',
    pairing: ['Рожеве вино', 'Томати', 'Базилік'],
    images: ['/images/products/goat-cheese-bebe-fumado.jpg'],
    ageing: '3 місяці + 2 тижні копчення'
  },
  {
    slug: 'drunk-gorrocha',
    title: 'П\'яна Горроча',
    titleEn: 'Drunk Gorrocha',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'limited',
    badges: ['У вині', 'Обмежена партія', '4 тижні у Каберне'],
    shortDescription: 'Козиний сир, вимочений у вині Каберне протягом 4 тижнів',
    longDescription: 'Наша Гарроча після 3 місяців витримки занурюється в домашнє вино Каберне на 4 тижні. Результат - неймовірне поєднання козиного сиру з винними танінами та фруктовими нотками.',
    production: 'Витримка 3 місяці, потім 4 тижні вимочування у вині.',
    pairing: ['Червоне вино', 'Інжир', 'Прошуто'],
    images: ['/images/products/goat-cheese-pyana-gorrocha.jpg'],
    ageing: '3 місяці + 4 тижні у вині',
    featured: true
  },
  {
    slug: 'smoked-gorrocha',
    title: 'Копчена Горроча',
    titleEn: 'Smoked Gorrocha',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Копчений', 'Димний аромат'],
    shortDescription: 'Копчена версія нашої Гаррочі',
    longDescription: 'Традиційна Гарроча з додатковим етапом холодного копчення. Димні нотки чудово доповнюють горіховий смак козиного сиру.',
    production: 'Холодне копчення на фруктовій тріщі.',
    pairing: ['Крафтове пиво', 'Печені перці', 'Часник'],
    images: [
      '/images/products/goat-cheese-kopchena-gorrocha-1.jpg',
      '/images/products/goat-cheese-kopchena-gorrocha-2.jpg'
    ],
    ageing: '2-3 місяці + копчення'
  },
  {
    slug: 'cabrales',
    title: 'Кабралес',
    titleEn: 'Cabrales',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'available',
    badges: ['Блакитна пліснява', 'Іспанський стиль'],
    shortDescription: 'Козиний сир з блакитною пліснявою в іспанському стилі',
    longDescription: 'Інтенсивний козиний сир з блакитною пліснявою за рецептом іспанського Кабралеса. Гострий, пікантний смак для справжніх поціновувачів.',
    pairing: ['Херес', 'Мед', 'Фініки'],
    images: ['/images/products/goat-cheese-cabrales.jpg'],
    ageing: '2-4 місяці'
  },
  {
    slug: 'arcoiris',
    title: 'Аркоіріс',
    titleEn: 'Arcoiris',
    category: ['goat'],
    milkType: 'goat',
    price: 64,
    priceUnit: 'грн/100г',
    status: 'limited',
    badges: ['У вині', 'Блакитна пліснява', 'Унікальний'],
    shortDescription: 'Козиний кабралес, витриманий у вині - "веселка смаків"',
    longDescription: 'Наш найсміливіший експеримент - козиний Кабралес з блакитною пліснявою, витриманий у вині. Поєднання гостроти блакитної плісняви, козиного смаку та винних танінів створює справжню веселку смаків.',
    production: 'Подвійна витримка: спочатку з пліснявою, потім у вині.',
    pairing: ['Десертне вино', 'Волоські горіхи', 'Темний шоколад'],
    images: ['/images/products/goat-cheese-arcoiris.jpg'],
    ageing: '3 місяці + вино'
  },

  // Spirits
  {
    slug: 'van-gogh-absinthe',
    title: 'Абсент Van Gogh',
    titleEn: 'Van Gogh Absinthe',
    category: ['drink'],
    milkType: 'mixed',
    price: 250,
    priceUnit: 'грн',
    status: 'available',
    badges: ['70°', 'Французький рецепт 1872'],
    shortDescription: 'Традиційний абсент за рецептом 1872 року',
    longDescription: 'Виготовлений за оригінальним французьким рецептом 1872 року. Міцність 70°. Справжня "зелена фея" з повним набором трав.',
    pairing: ['Цукор', 'Крижана вода'],
    images: ['/images/products/van-gogh-absinthe.png'],
  },
  {
    slug: 'bourbon',
    title: 'Бурбон',
    titleEn: 'Bourbon',
    category: ['drink'],
    milkType: 'mixed',
    price: 230,
    priceUnit: 'грн',
    status: 'available',
    badges: ['Карпатський дуб', '70% кукурудза'],
    shortDescription: 'Кукурудзяний віскі, витриманий у бочках з карпатського дуба',
    longDescription: '70% кукурудза, 30% ячмінь. Витримка в обпалених бочках з карпатського дуба. Американська традиція в українському виконанні.',
    pairing: ['Лід', 'Цитрусова цедра'],
    images: ['/images/products/bourbon-bottle.png'],
  },
  {
    slug: 'gin',
    title: 'Джин',
    titleEn: 'Gin',
    category: ['drink'],
    milkType: 'mixed',
    price: 195,
    priceUnit: 'грн',
    status: 'available',
    badges: ['Рецепт 1761', 'Thomas Dakin'],
    shortDescription: 'За рецептом Томаса Дакіна 1761 року',
    longDescription: 'Класичний лондонський сухий джин за історичним рецептом Thomas Dakin 1761 року. Ялівець, коріандр, дудник та інші ботанічні.',
    pairing: ['Тонік', 'Огірок', 'Лайм'],
    images: ['/images/products/gin-bombay.png'],
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category.includes(category))
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getAvailableProducts(): Product[] {
  return products.filter(p => p.status !== 'out')
}
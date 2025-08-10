export interface Review {
  id: string
  name: string
  date: string
  rating: number
  product?: string
  text: string
  verified?: boolean
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Олександр',
    date: '2025-08-07',
    rating: 5,
    product: 'Сирний сет "Му"',
    text: 'Замовив сет "Му". Ліхтенфельда не було. Радив би прочитати інструкцію і дати сиру "подихати". Сім\'я задоволена, особливо сестри. Хвалили інтенсивний смак.',
    verified: true
  },
  {
    id: '2',
    name: 'Божена',
    date: '2025-07-31',
    rating: 4,
    text: 'Сиру потрібно було більше 24 годин, щоб відновити аромат та консистенцію. Критикувала упаковку доставки. Врешті-решт сир виявився смачним та насиченим.',
    verified: true
  },
  {
    id: '3',
    name: 'Галина Вернигора',
    date: '2025-07-26',
    rating: 5,
    text: 'Захоплена ароматом сирів. Це справжній гастрономічний оргазм! Дякую за якість гурманського рівня.',
    verified: true
  },
  {
    id: '4',
    name: 'Оксана Коноваленко',
    date: '2025-06-27',
    rating: 3,
    product: 'Кабралес, Альбіон',
    text: 'Кабралес мав смак прогірклого масла. Альбіон занадто солоний. Можливо, це особливості сортів.',
    verified: true
  },
  {
    id: '5',
    name: 'Віктор і Валентина Солтисяк',
    date: '2025-04-06',
    rating: 5,
    product: 'Сирний сет',
    text: 'Отримали 7 з 9 сирів у сеті. Хвалимо смаки, що змінюються. Цінуємо майстерність.',
    verified: true
  },
  {
    id: '6',
    name: 'Марія К.',
    date: '2025-03-15',
    rating: 5,
    product: 'Чеддер',
    text: 'Найкращі сири в Україні! Чеддер просто неймовірний, нагадує справжній англійський. Дякую за вашу працю!',
    verified: true
  },
  {
    id: '7',
    name: 'Андрій П.',
    date: '2025-03-10',
    rating: 5,
    product: 'Рамсес копчений',
    text: 'Рамсес копчений - це щось неймовірне! Такого смаку я не зустрічав навіть у Європі. Обов\'язково замовлю ще!',
    verified: true
  },
  {
    id: '8',
    name: 'Оксана Л.',
    date: '2025-02-28',
    rating: 5,
    product: 'П\'яна Горроча',
    text: 'П\'яна Горроча - мій фаворит! Козиний сир у вині - це геніально. Дякую, що робите такі шедеври!',
    verified: true
  },
  {
    id: '9',
    name: 'Петро Михайлович',
    date: '2025-02-15',
    rating: 5,
    product: 'Ліхтенфельд',
    text: 'Сир Ліхтенфельд - це справжній грюйєр! Використовую для фондю, результат чудовий. Швейцарська якість від українського виробника!',
    verified: true
  },
  {
    id: '10',
    name: 'Ірина В.',
    date: '2025-01-20',
    rating: 4,
    product: 'Камбоцола',
    text: 'Камбоцола має дуже ніжний смак, м\'якша за звичайні блакитні сири. Ідеально для тих, хто тільки починає знайомство з пліснявими сирами.',
    verified: true
  },
  {
    id: '11',
    name: 'Дмитро К.',
    date: '2025-01-10',
    rating: 5,
    product: 'Абсент Ван Гог',
    text: 'Абсент за старовинним рецептом - це щось! Відчувається якість та автентичність. Дякую за можливість спробувати справжній абсент!',
    verified: true
  },
  {
    id: '12',
    name: 'Наталія С.',
    date: '2024-12-25',
    rating: 5,
    product: 'Сирний сет "Мє"',
    text: 'Козині сири - це любов! Кожен сир унікальний, смаки неймовірні. Особливо сподобався Аркоіріс. Буду замовляти ще!',
    verified: true
  },
  {
    id: '13',
    name: 'Олег Петренко',
    date: '2024-12-15',
    rating: 5,
    text: 'Дякую за якість! Ваші сири - це справжнє мистецтво. Відчувається, що робите з душею. Рекомендую всім друзям!',
    verified: true
  },
  {
    id: '14',
    name: 'Катерина М.',
    date: '2024-12-01',
    rating: 5,
    product: 'Ярослав',
    text: 'Ярослав - чудовий сир! Ідеально підходить для бутербродів та запіканок. Смак насичений, текстура приємна.',
    verified: true
  },
  {
    id: '15',
    name: 'Володимир Т.',
    date: '2024-11-20',
    rating: 4,
    text: 'Гарні сири, але доставка могла б бути швидшою. Сири прийшли в хорошому стані, смак чудовий. Буду замовляти ще.',
    verified: true
  }
]

export function addReview(review: Omit<Review, 'id' | 'verified'>): Review {
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    verified: false
  }
  reviews.unshift(newReview)
  return newReview
}

export function getAverageRating(): number {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / reviews.length) * 10) / 10
}

export function getRatingDistribution(): Record<number, number> {
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  reviews.forEach(review => {
    distribution[review.rating]++
  })
  return distribution
}
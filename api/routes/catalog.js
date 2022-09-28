const { Router } = require('express')

const router = Router()

const filter = [
  {
    type: 'checkbox',
    text: 'Брэнды',
    code: 'brandsCode',
    values: [
      {
        text: 'Nike',
        value: 'nikeValue',
        color: 'red'
      },
      {
        text: 'Adidas',
        value: 'adidasValue',
        color: 'yellow'
      }
    ],
    value: []
  },
  {
    type: 'range',
    text: 'Цена',
    code: 'priceCode',
    minLimitValue: 1000,
    maxLimitValue: 5500,
    value: [1000, 5500]
  },
  {
    type: 'switch',
    text: 'Есть доставка',
    code: 'deliveryCode'
  },
  {
    type: 'radio',
    text: 'Пол',
    code: 'genderCode',
    values: [
      {
        text: 'Men',
        value: 'menValue'
      },
      {
        text: 'Women',
        value: 'womenValue'
      }
    ]
  }
]

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function getItem (i) {
  return {
    price: getRandomInt(1, 1000),
    title: 'title' + i,
    description: 'I am description №' + i
  }
}

const count = getRandomInt(1, 200)

router.get('/catalog/getFilter', function (_req, res) {
  res.json(filter)
})

router.get('/catalog/getItems', function (_req, res) {
  const items = []

  for (let i = 0; i < count; i++) {
    items.push(getItem(i))
  }

  res.json({
    items
  })
})

router.post('/catalog/getItems', function (req, res) {
  const { limit, page } = req.body

  const itemsCount = count >= limit ? limit : count

  const items = []

  for (let i = 0; i < itemsCount; i++) {
    items.push(getItem(i))
  }

  res.json({
    items,
    count,
    page
  })
})

module.exports = router

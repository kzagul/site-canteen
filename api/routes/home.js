const { Router } = require('express')

const router = Router()

const homeDirections = [
  { title: 'АВТОМАТИЗАЦИЯ ПРОДАЖ', svglight: 'directions_automatization-light', svgdark: 'directions_automatization-dark' },
  { title: 'ДИЗАЙН И РАЗРАБОТКА', svglight: 'directions_design-light', svgdark: 'directions_design-dark' },
  { title: 'ТЕХ ПОДДЕРЖКА И РАЗВИТИЕ', svglight: 'directions_support-light', svgdark: 'directions_support-dark' },
  { title: 'КОНТЕКСТНАЯ РЕКЛАМА', svglight: 'directions_reklama-light', svgdark: 'directions_reklama-dark' }
]

const advantages = [
  { title: 'NPS 9 из 10', description: 'Средний уровень удовлетворенности клиентов 9 баллов' },
  { title: '30-50%', description: 'Наши цены выгоднее московских за счет офиса в Тюмени' },
  { title: '100%', description: 'Сдаем проекты в срок за счет качественного планирования' },
  { title: '128', description: 'Успешно запущено и приносят клиентам прибыль' },
  { title: '140<sup> м 1</sup>', description: 'Площадь нашего офиса в городе Тюмень' },
  { title: '19+', description: 'Постоянный штат сотрудников в компании' },
  { title: '8', description: 'Работаем на рынке digital' },
  { title: '3', description: 'Средний LTV наших клиентов проекта' }
]

router.get('/getHomeDirections', function (_req, res) {
  res.json(homeDirections)
})

router.get('/getHomeAdvantages', function (_req, res) {
  res.json(advantages)
})

module.exports = router

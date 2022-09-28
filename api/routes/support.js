const { Router } = require('express')

const router = Router()

const miniBanners = [
  { title: 'Золотой сертифицированный партнер Битрикс24', description: '1С-БИТРИКС' },
  { title: 'Золотой сертифицированный партнер Битрикс24', description: '1С-БИТРИКС' },
  { title: 'ТОП-5 разработчиков интернет-магазинов / Уральский ФО', description: 'РЕЙТИНГ РУНЕТА' }
]

const directions = [
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: true },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА2', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: false },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА3', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: false },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА4', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: false },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА5', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: false },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА6', description: 'Обеспечение стабильной работы. Защита от вирусов и DDOS атак. Автоматическое наполнение сайта информацией, парсинг данных. Поиск точки взлома и устранение уязвимостей. Восстановление сайта из бэкапа', fullwidth: false },
  { title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА7', description: 'Найдем ошибки в коде, логике и дизайне сайта. Протестируем пользовательские сценарии. Проверим соблюдение стандартов и правил разработки 1С-Битрикс. Предложим конкретные действия, которые повысят стабильность работы сайта при высоких нагрузках.', fullwidth: false }
]

const priorities = [
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Процессы3', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' }
]

const processes = [
  { title: 'Комплексный аудит ', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Формирование задач', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Рабочая среда', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' },
  { title: 'Решение', description: 'Работаем короткими итерациями: формулируем гипотезы, реализуем, тестируем, делаем выводы. Персональный менеджер формирует задачи, контролирует сроки и качество. ' }
]

const technologies = [
  { svgLight: '/_nuxt/assets/img/main/technologies/material_design_light.png', svgDark: '/_nuxt/assets/img/main/technologies/material_design_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/vuejs_light.svg', svgDark: '/_nuxt/assets/img/main/technologies/vuejs_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/nuxtjs_light.png', svgDark: '/_nuxt/assets/img/main/technologies/nuxtjs_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/js_light.png', svgDark: '/_nuxt/assets/img/main/technologies/js_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/vuetify_light.png', svgDark: '/_nuxt/assets/img/main/technologies/vuetify_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/git_light.png', svgDark: '/_nuxt/assets/img/main/technologies/git_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/gitlab_light.png', svgDark: '/_nuxt/assets/img/main/technologies/gitlab_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/1cbitrix_light.png', svgDark: '/_nuxt/assets/img/main/technologies/1cbitrix_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/bitrix24_light.png', svgDark: '/_nuxt/assets/img/main/technologies/bitrix24_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/tilda_light.png', svgDark: '/_nuxt/assets/img/main/technologies/tilda_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/retailcrm_light.png', svgDark: '/_nuxt/assets/img/main/technologies/retailcrm_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/roistat_light.png', svgDark: '/_nuxt/assets/img/main/technologies/roistat_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/googleanalytics_light.png', svgDark: '/_nuxt/assets/img/main/technologies/googleanalytics_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/yandexdirect_light.png', svgDark: '/_nuxt/assets/img/main/technologies/yandexdirect_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/googleads_light.png', svgDark: '/_nuxt/assets/img/main/technologies/googleads_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/php_light.png', svgDark: '/_nuxt/assets/img/main/technologies/php_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/mysql_light.png', svgDark: '/_nuxt/assets/img/main/technologies/mysql_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/adobekuler_light.png', svgDark: '/_nuxt/assets/img/main/technologies/adobekuler_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/mongodb_light.png', svgDark: '/_nuxt/assets/img/main/technologies/mongodb_dark.png' },
  { svgLight: '/_nuxt/assets/img/main/technologies/figma_light.png', svgDark: '/_nuxt/assets/img/main/technologies/figma_dark.png' }
]

const projects = [
  { title: 'Rendement1', description: 'Сервис поиска исполнителей', img: '/main/projects/rendement.png', category: ['eccomerce', 'services', 'corp', 'crm'] },
  { title: 'Freeride2', description: 'Интернет-магазин спортивных товаров', img: '/main/projects/freeride.png', category: ['eccomerce', 'advert'] },
  { title: 'Rendement3', description: 'Сервис поиска исполнителей', img: '/main/projects/rendement.png', category: ['eccomerce', 'services', 'crm'] },
  { title: 'Freeride2', description: 'Интернет-магазин спортивных товаров', img: '/main/projects/freeride.png', category: ['crm', 'advert'] },
  { title: 'Rendement1', description: 'Сервис поиска исполнителей', img: '/main/projects/rendement.png', category: ['eccomerce', 'services'] },
  { title: 'Freeride2', description: 'Интернет-магазин спортивных товаров', img: '/main/projects/freeride.png', category: ['eccomerce', 'corp'] },
  { title: 'Rendement3', description: 'Сервис поиска исполнителей', img: '/main/projects/rendement.png', category: ['eccomerce', 'services'] },
  { title: 'Freeride2', description: 'Интернет-магазин спортивных товаров', img: '/main/projects/freeride.png', category: ['crm'] }
]

router.get('/getMiniBanners', function (_req, res) {
  res.json(miniBanners)
})

router.get('/getDirections', function (_req, res) {
  res.json(directions)
})

router.get('/getPriorities', function (_req, res) {
  res.json(priorities)
})

router.get('/getProcesses', function (_req, res) {
  res.json(processes)
})

router.get('/getTechnologies', function (_req, res) {
  res.json(technologies)
})

router.get('/getProjects', function (_req, res) {
  res.json(projects)
})

module.exports = router

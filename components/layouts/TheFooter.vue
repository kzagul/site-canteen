<template>
  <footer
    class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"
  >
    <b-container class="d-flex flex-wrap justify-content-between">
      <div class="col-md-4 d-flex align-items-start" style="max-width: 280px;">
        <div>
          <p>
            Как нас найти?
          </p>
          <b-button style="background-color: white; border-color: white;" class="align-items-start p-0" v-b-tooltip.hover title="Посмотрите на карте">
          <a
            href="https://2gis.ru/tyumen/firm/70000001041329381/65.441866%2C57.174216?m=65.442458%2C57.174411%2F18.19"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <MapMarker />
            <span class="mb-3 mb-md-0 text-muted"
              >2 Gis: ​Фирменная, 1/3, 2 этаж</span
            >
          </a>
        </b-button>
        </div>
      </div>

      <!-- <div>
        Логотипчик
      </div> -->

      <div class="col-md-4 d-flex align-items-start align-items-md-end flex-column mt-5 mt-md-0" style="max-width: 280px;">
        <p>
          Как с нами связаться?
        </p>
        <ul class="nav d-flex flex-column justify-content-end list-unstyled text-muted">
          <li class="ms-3">
            <b-button style="background-color: white; border-color: white;" class="align-items-start p-0" v-b-tooltip.hover title="Позвоните, мы с радостью ответим!">
              <a href="tel:+73452387079" style="color: grey;"> +7 (3452) 38-70-79 </a>
            </b-button>
          </li>
          <li class="ms-3 mt-3">
            <b-button style="background-color: white; border-color: white;" class="align-items-start p-0" v-b-tooltip.hover title="Позвоните, мы с радостью ответим!">
              <a href="tel:+79829049070" style="color: grey;"> +7 (982) 904‒90‒70 </a>
            </b-button>
          </li>
          <li class="ms-3 mt-3 mb-5">
            <b-button style="background-color: white; border-color: white;" class="align-items-start p-0" v-b-tooltip.hover title="Напишите, мы с радостью ответим!">
              <a href="mailto:spektr.tmn@mail.ru" style="color: grey;">spektr.tmn@mail.ru</a>
            </b-button>
          </li>
        </ul>
      </div>
    </b-container>
  </footer>
</template>

<template>
  <b-navbar class="border-bottom" style="background-color: white;">
    <b-container class="d-flex flex-row px-1 px-md-3">
      <!-- <div>
        <b-navbar-brand>
          <b-link to="/">Столовая</b-link>
        </b-navbar-brand>
      </div> -->

      <div>
        <b-link to="/">
          <img src="../../assets/logo_canteen.png"  style="width: 180px; height: auto;" alt="Логотип" />
        </b-link>
      </div>
     
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Меню</b-nav-item>
          <b-nav-item href="/">Узнать цены</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
      <div>
        <!-- <b-link to="menu" class="pr-4">Меню</b-link> -->
        <b-link to="price">Только цены</b-link>
      </div>
    </b-container>
  </b-navbar>
</template>

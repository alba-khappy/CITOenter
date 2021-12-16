<template lang="pug">
div
  section.search
    #swiperContainer.container.search--container
      #swiper-slide--style.swiper-slide--style
        h1.search--h1 &nbsp;Выбирай лучшее -
          .search--h1-highlight.search--h1-highlight-1
            p &nbsp;поступай правильно
        a.search--a(href="/search") Начать поиск
        img.search__pic(src="../assets/search-img1.svg", alt="illustration")
      .swiper-slide--style
        h1.search--h1
          .search--h1-highlight.search--h1-highlight-2 &nbsp;Твой билет
          div в будущее
        a.search--a(href="/search") Начать поиск
        img.search__pic(src="../assets/search-img2.svg", alt="illustration")
      .swiper-slide--style
        h1.search--h1
          span Открывай
          span.search--h1-highlight.search--h1-highlight-3 новые
          span.search--h1-highlight.search--h1-highlight-4 &nbsp;возможности
        a.search--a(href="/search") Начать поиск
        img.search__pic(src="../assets/search-img3.svg", alt="illustration")
    .swiper__buttons.search--swiper-buttons
      #search__swiper-button--1.swiper-button
      #search__swiper-button--2.swiper-button
      #search__swiper-button--3.swiper-button

  section.about
    .container.about--container
      ul.about__list
        li.about__list-item
          a.about__a(href="/search")
            include ../assets/about1.svg
            p.about__p Государственные вузы
        li.about__list-item
          a.about__a(href="/directions")
            include ../assets/about2.svg
            p.about__p Направления подготовки
        li.about__list-item
          a.about__a(href="/rules")
            include ../assets/about3.svg
            p.about__p Правила поступления

  section.admission
    .container.admission--container
      h2.h2.admission--h2 Как поступить в вуз
      ul.admission--grid
        li.admission--item(v-for="admission in admissions")
          .admission__grid-img.admission__grid-img-1.admission__grid--border
            img(:src="require(`../assets/${admission.src}`)")
          .admission__p-wrapper
            p.admission__grid-p--blue {{ admission.index }}
            p.admission__grid-p
              span(v-html="admission.text")
      p.admission--condition *При необходимости
      .swiper__buttons.admission--swiper-buttons
        .swiper-button
        .swiper-button
        .swiper-button
        .swiper-button

  section.news
    .container.news--container
      .news__heading
        h2.h2.news--h2 Новости
        a(href="/allNews") Все новости
      .news__list-wrapper
        ul#newsList.news__list
          li.news__list-item(v-for="(news, index) in allNews")
            a.news__a(href="/news")
              img(:src="require(`../assets/${news.newsImg}`)")
              .news__description
                .news__wrapper--description
                  h3.news__description--h3 {{ news.newsH3 }}
                  p.news__description--p {{ news.newsP }}
                .news__date {{ news.newsDate }}
          a.button-next.news__button-next(href="#")
        .swiper__buttons.news--swiper-buttons
          .swiper-button
          .swiper-button
          .swiper-button

  section.services
    .container.services--container
      h2.h2.services--h2 Вам может быть интересно
      .services__list-wrapper
        ul#servicesList.services__list
          li.services__list-item(v-for="(service, index) in servicesArray")
            a.services__a(
              :style="{ backgroundImage: 'url(' + require('../assets/' + service.servicesImg) + ')' }",
              :href="service.serviceLink"
            )
            p.services__p {{ service.servicesP }}
          a.button-next.services__button-next(href="#")
        .swiper__buttons.services--swiper-buttons
          .swiper-button
          .swiper-button
          .swiper-button
</template>


<script>
export default {
  name: "sections",
  data() {
    return {
      admissions: [
        {
          index: "1",
          src: "adm-img1.svg",
          text: "<div class='p--first-word'>Выберите</div> специальность",
        },
        {
          index: "2",
          src: "adm-img2.svg",
          text: "<div class='p--first-word'>Выберите</div> ВУЗ",
        },
        {
          index: "3",
          src: "adm-img3.svg",
          text: "<div class='p--first-word'>Сдайте</div> ЕГЭ*",
        },
        {
          index: "4",
          src: "adm-img4.svg",
          text: "<div class='p--first-word'>Подайте</div> заявление о приеме в вуз",
        },
        {
          index: "5",
          src: "adm-img5.png",
          text: "<div class='p--first-word'>Сдайте</div> вступительные испытания",
        },
        {
          index: "6",
          src: "adm-img6.svg",
          text: "<div class='p--first-word'>Подайте</div> заявление о согласии на зачисление в вуз",
        },
        {
          index: "7",
          src: "adm-img7.svg",
          text: "<div class='p--first-word'>Принесите</div> оригиналы документа об образовании",
        },
        {
          index: "8",
          src: "adm-img8.svg",
          text: "<div class='p--first-word'>Пройдите</div> медицинское обследование",
        },
      ],
      allNews: [
        {
          newsImg: "news1.jpg",
          newsH3: "Проект расписания ГИА-11",
          newsP: "Тут будет подзаголовокТут будет подзаголовок",
          newsDate: "06.02.2021",
        },
        {
          newsImg: "news2.jpg",
          newsH3:
            "Проведение основного государственного экзамена (ОГЭ) по предметам по выбору в 2021 г.",
          newsP: "Тут будет подзаголовок",
          newsDate: "29.01.2021",
        },
        {
          newsImg: "news3.jpg",
          newsH3: "Итоговое сочинение",
          newsP:
            "Тут будет подзаголовокТут будет подзаголовокТут будет подзаголовок",
          newsDate: "29.01.2021",
        },
      ],
      servicesArray: [
        {
          serviceLink: "https://myskills.ru/",
          servicesImg: "services1.png",
          servicesP: "Онлайн-сервис самопроверки",
        },
        {
          serviceLink: "https://priemvuz.ru/",
          servicesImg: "services2.png",
          servicesP: "Проверка результатов ЕГЭ",
        },
        {
          serviceLink: "http://check.ege.edu.ru/",
          servicesImg: "services3.png",
          servicesP: "Официальный информационный портал ЕГЭ",
        },
      ],
    };
  },

  mounted() {
    var cont = document.querySelector("#swiperContainer");
    var swiperSlide = document.querySelector("#swiper-slide--style");
    var contOffset = cont.offsetWidth;

    var btn1 = document.querySelector("#search__swiper-button--1");
    var btn2 = document.querySelector("#search__swiper-button--2");
    var btn3 = document.querySelector("#search__swiper-button--3");

    btn1.addEventListener("click", function () {
      swiperSlide.style.marginLeft = 0 + "px";
    });

    btn2.addEventListener("click", function () {
      swiperSlide.style.marginLeft = -contOffset + "px";
    });

    btn3.addEventListener("click", function () {
      swiperSlide.style.marginLeft = -(contOffset * 2) + "px";
    });
  },
};
</script>


<style lang="scss">
@import "../assets/scss/general.scss";

/*SWIPER*/

.swiper-slide--style {
  display: grid;
  grid-template-rows: 245px 155px;
  grid-template-columns: 1fr 370px;
  align-items: end;
  position: relative;
  min-width: 100%;
  padding: 0 150px;
  transition: 0.3s;
}

.swiper__buttons {
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper-button {
  width: 8px;
  height: 8px;
  background-color: #c4c4c4;
  border-radius: 20px;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:active,
  &:hover {
    background-color: $blueColor;
  }
}

//search

.search {
  position: relative;
}

.search--container {
  display: flex;
  overflow: hidden;
  margin: 0 auto;
}

.search--h1 {
  max-width: 575px;
  font-size: 52px;
  line-height: 58px;
  letter-spacing: 0.02em;
  color: $blackColorText;
  margin-bottom: 30px;
}

.search--h1-highlight {
  background-repeat: no-repeat;
  color: $whiteColor;
  height: 80px;
  display: flex;
  align-items: center;
}

.search--h1-highlight-1 {
  background-image: url("../assets/highlight1.svg");
}

.search--h1-highlight-2 {
  background-image: url("../assets/highlight2.svg");
}

.search--h1-highlight-3 {
  background-image: url("../assets/highlight3.svg");
  display: inline;
}

.search--h1-highlight-4 {
  background-image: url("../assets/highlight4.svg");
}

.search--a {
  @include btnBlue;
  grid-column: 1/2;
  align-self: start;
  display: inline-block;
  padding: 20px 30px;
  max-width: 232px;
  line-height: 21px;
  font-weight: 900;
  font-size: 18px;
  margin-left: 15px;
}

.search__pic {
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: end;
}

.search--swiper-buttons {
  bottom: 30px;
}

@media (max-width: 1300px) {
  .swiper-slide--style {
    grid-template-columns: 1fr;
    grid-template-rows: 245px 370px 155px;
    padding: 0 50px;
  }

  .search--h1 {
    justify-self: center;
  }

  .search__pic {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: center;
  }

  .search--a {
    justify-self: center;
    margin-left: 0;
  }
}

@media (max-width: 1300px) and (min-width: 768px) {
  .search--container {
    margin-bottom: 30px;
  }

  .search--h1 {
    margin-bottom: 50px;
  }

  .search--a {
    margin-top: 45px;
  }

  .search--swiper-buttons {
    bottom: -10px;
  }
}

@media (max-width: 767px) {
  .swiper-slide--style {
    grid-template-rows: 135px 200px 180px;
    padding: 0;
  }

  .search--container {
    padding: 0;
  }

  .search--h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }

  .search--a {
    max-width: 240px;
    align-self: self-start;
    padding: 20px 40px;
    margin-top: 40px;
  }

  .search__pic {
    max-width: 300px;
    width: 75%;
  }

  .search--h1-highlight {
    height: 50px;
  }

  .search--h1-highlight-1 {
    background-size: contain;
    background-position: center;
  }

  .search--swiper-buttons {
    bottom: 15px;
  }
}

//about

.about {
  background-color: $lightBlue;
}

.about--container {
  display: flex;
  justify-content: center;
  padding: 60px 0;
}

.about__list {
  display: flex;
}

.about__list-item {
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
}

.about__a {
  display: grid;
  grid-template-columns: 60px 270px;
  align-items: center;
  box-shadow: 0 16px 16px #dde6eb;
  padding: 20px 0 20px 20px;
  color: $blueColor;
  background-color: $whiteColor;
  transition: 0.3s;

  &:hover {
    background-color: $blueColor;
    color: $whiteColor;
    box-shadow: 0 16px 16px #acafb1;

    svg path {
      fill: $whiteColor;
    }
  }
}

.about__p {
  font-weight: bold;
  font-size: 20px;
}

@media (max-width: 1300px) {
  .about__list {
    flex-direction: column;
  }

  .about__a {
    padding: 20px 60px 20px 80px;
  }

  .about__list-item:not(:last-child) {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .about--container {
    padding-left: 12px;
    padding-right: 12px;
  }

  .about__a {
    grid-template-columns: 55px 260px;
    padding: 20px 0 20px 20px;
  }
}

@media (max-width: 374px) {
  .about__a {
    grid-template-columns: 45px 220px;
  }
  .about__p {
    font-weight: normal;
    font-size: 16px;
  }
}

//admission

.admission--container {
  padding: 60px 165px 35px;
}

.admission--h2 {
  margin-bottom: 40px;
}

.admission--grid {
  display: grid;
  grid-template-rows: repeat(2, 235px);
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 35px;
  margin-bottom: 30px;
}

.admission__grid--border {
  border: 2px solid $blueColor;
}

.admission__grid-img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $lightBlue;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 30px;
}

.admission__grid-p {
  max-width: 200px;
  color: $blackColorText;
}

.admission__p-wrapper {
  display: flex;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  padding-left: 10px;
}

.admission__grid-p--blue {
  display: block;
  color: $blueColor;
  margin-right: 20px;
}

.p--first-word {
  color: $blueColor;
}

.admission--condition {
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: #5e647b;
}

.admission--swiper-buttons {
  display: none;
}

@media (max-width: 1440px) and (min-width: 1024px) {
  .admission {
    background: url("../assets/arrow-top.svg") 100% 20% no-repeat,
      url("../assets/arrow-bottom.svg") 0 66% no-repeat;
  }
}

@media (min-width: 1441px) {
  .admission {
    background: url(../assets/arrow-top.svg) center 22% no-repeat,
      url(../assets/arrow-bottom.svg) center 66% no-repeat;
  }
}

@media (max-width: 1024px) {
  .admission {
    background: url(../assets/arrow-768-1.svg) 20% 27% no-repeat;
    background-size: contain;
  }

  .admission--grid {
    overflow: hidden;
    grid-template-rows: 235px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 10px;
  }

  .admission--item:nth-child(4),
  .admission--item:nth-child(5),
  .admission--item:nth-child(6),
  .admission--item:nth-child(7),
  .admission--item:nth-child(8) {
    display: none;
  }
}

@media (max-width: 1080px) {
  .admission--container {
    padding: 60px 40px 35px;
  }
}

@media (max-width: 1300px) and (max-width: 768px) {
  .admission--grid {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 40px;
  }

  .admission--item:nth-child(3) {
    display: none;
  }

  .admission--h2 {
    margin-bottom: 60px;
  }

  .admission--container {
    padding: 40px 40px 25px;
  }
}

@media (max-width: 767px) {
  .admission {
    background: url(../assets/arrow-375.svg) 20% 35% no-repeat;
    background-size: contain;
  }

  .admission--container {
    position: relative;
    padding: 40px 40px 30px;
  }

  .admission--h2 {
    margin-bottom: 30px;
  }

  .admission--grid {
    margin-bottom: 10px;
  }

  .admission__grid-img {
    margin-bottom: 20px;
  }

  .admission--condition {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .admission--swiper-buttons {
    display: flex;
    bottom: 15px;
  }
}

@media (max-width: 375px) {
  .admission__p-wrapper {
    font-size: 16px;
    line-height: 19px;
  }

  .admission--container {
    padding: 30px 15px;
  }

  .admission--h2 {
    font-size: 24px;
    line-height: 28px;
  }
}

//news

.news {
  background-color: $lightBlue;
}

.news__heading {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.news--h2 {
  margin-right: 30px;
}

.news__list {
  @include displayFlexSpaceBetween;
}

.news__list-item {
  margin-bottom: 30px;
}

.news__a {
  display: inline-block;
  box-shadow: 0 16px 16px #dde6eb;
  transition: 0.3s;

  img {
    display: block;
  }

  &:hover {
    box-shadow: 0 16px 16px #acafb1;
  }
}

.news__description--h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
}

.news__description--p {
  max-width: 210px;
  font-size: 14px;
  line-height: 18px;
}

.news__date {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: $grayColor2;
}

.news--container {
  padding: 60px 165px 30px;

  a {
    color: $blackColorText;
  }
}

.news__description {
  width: 350px;
  height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $whiteColor;
  padding: 15px 24px 25px;
}

.news--swiper-buttons {
  display: none;
}

@media (max-width: 1400px) {
  .news__a,
  .news__a img,
  .news__description {
    width: 100%;
    max-width: 310px;
  }

  .news__list-item {
    padding-right: 35px;
    margin-bottom: 0;

    &:nth-child(3) {
      display: none;
    }
  }

  .button-next {
    background: transparent url("../assets/arrowNext.svg") no-repeat;
    position: absolute;
    height: 35px;
    width: 22px;
    border: none;
    right: 0;
  }

  .news__button-next {
    top: 48%;
  }

  .news--swiper-buttons {
    display: flex;
  }

  .news__list-wrapper {
    position: relative;
  }
}

@media (max-width: 1400px) and (min-width: 769px) {
  .news__list {
    width: 95%;
    margin-bottom: 30px;
  }
}

@media (max-width: 1300px) and (max-width: 768px) {
  .news__heading {
    margin-bottom: 30px;
  }

  .news--swiper-buttons {
    bottom: -70px;
  }
}

@media (max-width: 1080px) {
  .news--container {
    padding: 60px 40px 130px;
  }
}

@media (max-width: 767px) {
  .news--container {
    padding: 60px 15px 65px;
  }

  .news__description {
    height: 235px;
  }

  .news__heading {
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .news__description {
    height: 210px;
  }

  .news__a {
    margin: 0 auto 30px;
  }

  .news--h2 {
    font-size: 24px;
    line-height: 28px;
  }

  .news__list-item:nth-child(2) {
    display: none;
  }

  .news__button-next {
    top: 42%;
    left: 330px;
  }

  .news--swiper-buttons {
    bottom: -10px;
  }
}

@media (max-width: 374px) {
  .news__button-next {
    left: 280px;
  }
}

//services

.services--container {
  padding: 75px 165px 90px;
}

.services__list-item {
  display: flex;
  flex-direction: column;
}

.services--h2 {
  margin-bottom: 40px;
}

.services__p {
  color: $blackColorText;
}

.services__a {
  width: 350px;
  height: 154px;
  display: block;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #dde6eb;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    border: 1px solid $blueColor;
  }
}

.services__list-wrapper {
  position: relative;
}

.services__list {
  @include displayFlexSpaceBetween;
  overflow: hidden;
}

.services--swiper-buttons {
  display: none;
}

.services__button-next {
  top: 27%;
}

@media (max-width: 1400px) {
  .services--swiper-buttons {
    display: flex;
  }
}

@media (max-width: 1400px) and (min-width: 768px) {
  .services__list {
    width: 95%;
  }

  .services__list-item:nth-child(3) {
    display: none;
  }

  .services__button-next {
    top: 37%;
  }
}

@media (max-width: 1300px) and (min-width: 768px) {
  .services__list-item {
    margin: 10px;
  }

  .services__a {
    width: 310px;
  }

  .services--swiper-buttons {
    bottom: -40px;
  }
}

@media (max-width: 1080px) {
  .services--container {
    padding: 40px 40px 105px;
  }

  .services--h2 {
    margin-bottom: 18px;
  }
}

@media (max-width: 767px) {
  .services--container {
    padding: 30px 15px 70px;
  }

  .services__list {
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .services__a {
    width: 310px;
    margin: 0 auto 20px;
    background-size: 90%;
  }

  .services__list-item:not(:first-child) {
    display: none;
  }

  .services__list-item:not(:last-child) {
    padding-right: 60px;
  }

  .services--h2 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
  }

  .services__p {
    margin-bottom: 30px;
  }

  .services__button-next {
    left: 330px;
  }
}

@media (max-width: 374px) {
  .services__a {
    width: 250px;
  }

  .services__button-next {
    left: 280px;
  }
}
</style>
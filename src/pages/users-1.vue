<template lang="pug">
    div.container.container--users
        nav.aside-nav
            img.nav__logo(src="../assets/logo-inline.svg", alt="logo")
            ul.nav-list
                li.nav-item
                    a(href="#").nav-link.nav-link--clients Пользователи
                li.users__item
                    a(href="#").nav-link.nav-link--apps Приложения
                li.users__item
                    a(href="#").nav-link.nav-link--settings Настройки
        header.header
            div.header__avatar
            p.header__user-name Иванов Иван Иванович
            p.header__user-email E-mail: email@email.ru
            a(href="").header__exit-link
                p Выйти
                include ../assets/user.svg

        section.selected-users__section
            h1.selected-users__heading Пользователи
            ul.users__selected-user
                user-card
                user-card


</template>

<script>

    import userCard from "@/components/userCard.vue";

    export default {
        name: "",
        data() {
            return {};
        },
        components: {
            userCard,
        },
    };
</script>


<style lang="scss">
    @import "../assets/scss/general.scss";

    .container--users {
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 100px auto;
    }

    .aside-nav {
        height: 100vh;
        grid-area: 1/1/3/2;
        background-color: $lightBlue;
        padding: 20px 30px 20px 20px;
    }

    .nav__logo {
        margin-bottom: 60px;
    }

    .header {
        grid-area: 1/2/2/3;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: repeat(2, auto);
        grid-column-gap: 12px;
        background-color: #CCCCCC;
        padding: 10px 50px 10px 20px;
    }

    .header__avatar {
        grid-area: 1/1/3/2;
        width: 80px;
        height: 80px;
        background: transparent url("../assets/avatar.png") no-repeat center;
        border-radius: 40px;
        background-size: cover;
    }

    .header__user-name {
        grid-area: 1/2/2/3;
        align-self: center;
        font-weight: 500;
        font-size: 18px;
    }

    .header__user-email {
        grid-area: 2/2/3/3;
        align-self: center;
        font-size: 12px;
        font-weight: 400;
    }

    .header__exit-link {
        grid-area: 1/3/3/4;
        display: flex;
        align-items: center;
        gap: 10px;
        color: $blackColor;
    }

    .users__users-section {
        grid-area: 2/2/3/3;
        background-color: $whiteColor;
    }

    .nav-link {
        display: block;
        height: 40px;
        color: $blueColor;
        padding-left: 50px;
        margin-bottom: 25px;

        &:focus {
            text-decoration: underline;
        }
    }

    .nav-link--clients {
        background: url("../assets/aside-users.svg") no-repeat;
    }

    .nav-link--apps {
        background: url("../assets/aside-apps.svg") no-repeat;
    }

    .nav-link--settings{
        background: url("../assets/aside-settings.svg") no-repeat;
    }

    .selected-users__section {
        padding: 60px 50px;
    }

    .selected-users__heading {
        font-size: 36px;
        margin-bottom: 40px;
    }

</style>
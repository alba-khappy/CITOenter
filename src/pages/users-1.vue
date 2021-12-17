<template lang="pug">
    div.container.users__container
        nav.users__nav
            img.users__logo(src="../assets/logo-inline.svg", alt="logo")
            ul
                li
                    a Пользователи
                li
                    a Приложения
                li
                    a Настройки
        header.users__header
        section.users__users-section


</template>

<script>
    export default {
        name: "",
        data() {
            return {};
        },
    };
</script>


<style lang="scss">
    @import "../assets/scss/general.scss";

    .users__container {
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    .users__logo {

    }

    .users__nav {
        grid-area: 1/1/2/2;
        background-color: $lightBlue;
    }

    .users__header {
        grid-area: 1/2/2/3;
        background-color: #CCCCCC;
    }

    .users__users-section {
        grid-area: 2/2/3/3;
        background-color: $whiteColor;
    }

</style>
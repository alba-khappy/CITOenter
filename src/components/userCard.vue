<template lang="pug">
    li.user-card
        div.user-card__avatar
        p.user-card__name Иванов Иван Иванович
        p.user-card__rights Администратор
        p.user-card__email E-mail: email@email.ru
        div.user-card__btn-wrapper
            button.user-card__btn-delete Удалить
            div.user-card__btn-cross



</template>

<script>
    export default {
        name: "user-card",
        props: {
        },
        data() {
            return {
                checked: [],
            };
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .user-card {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: repeat(3, auto);
        grid-gap: 17px 20px;
        padding: 20px;
        background-color: $lightBlue;
        margin-bottom: 30px;
    }

    .user-card__avatar {
        grid-area: 1/1/4/2;
        width: 80px;
        height: 80px;
        background: transparent url("../assets/avatar.png") no-repeat center;
        border-radius: 40px;
        background-size: cover;
    }

    .user-card__name {
        grid-area: 1/2/2/3;
        font-weight: 500;
        font-size: 22px;
    }

    .user-card__rights {
        grid-area: 2/2/3/3;
        font-size: 12px;
        font-weight: 400;
    }

    .user-card__email {
        grid-area: 3/2/4/3;
        font-size: 18px;
        font-weight: 400;
    }

    .user-card__btn-wrapper {
        grid-area: 1/3/2/4;
    }

    .user-card__btn-delete {
        width: 90px;
        background-color: transparent;
        border: none;
        font-weight: bold;
        font-size: 12px;
        color: $grayColor;

    }

    .user-card__btn-cross {
            position: relative;
            &:after {
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        transform: rotate(45deg);
        background-color: $grayColor;
        right: 0;
        top: -9px;
        }

        &:before {
            content: '';
            position: absolute;
            width: 15px;
            height: 2px;
            transform: rotate(-45deg);
            background-color: $grayColor;
            right: 0;
            top: -9px;
        }
    }

</style>
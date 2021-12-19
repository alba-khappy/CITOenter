<template lang="pug">
    div.user-card
        div.user-card__avatar
        p.user-card__name Иванов Иван Иванович
        p.user-card__rights Администратор
        p.user-card__email E-mail: email@email.ru
        button.user-card__btn-delete Удалить



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
        grid-gap: 10px 20px;
        padding: 20px;
        background-color: $lightBlue;
        margin-bottom: 20px;
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
    }

    .user-card__rights {
        grid-area: 2/2/3/3;
    }

    .user-card__email {
        grid-area: 3/2/4/3;
    }

    .user-card__btn-delete {
        grid-area: 1/3/2/4;
        position: relative;
        width: 70px;
        background-color: transparent;
        border: none;
        font-weight: bold;
        font-size: 12px;
        color: $grayColor;

        &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        transform: rotate(45deg);
        background-color: $grayColor;
        right: 0;
        top: 10px;
        }

        &:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 2px;
            transform: rotate(-45deg);
            background-color: $grayColor;
            right: 0;
            top: 10px;
        }
    }

</style>
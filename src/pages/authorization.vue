<template lang="pug">
    div.authorization__container--align-center
        form.authorization__form(action="")
            img.authorization__logo(src="../assets/logo-block.svg", alt="logo")
            h1.authorization__h1 Войти в систему
            div.authorization__input-container.authorization__input-container--email
                label.authorization__label(for="email") E-mail
                input#email.authorization__input(type="text", name="email", required)
                div.circle.circle--error
                div.circle.circle--access

            div.authorization__input-container.authorization__input-container--password
                label.authorization__label(for="password") Пароль
                input#password.authorization__input.authorization__input--error(type="password", name="password", required)
                div.circle.circle--access
                div.circle.circle--error
                button.authorization__button-viewing
            button.authorization__button-entrance(type="submit", value="Войти") Войти

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

    .authorization__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        background-color: $lightBlue;
        padding: 20px 40px 50px;
        margin: 0 auto;
    }

    .authorization__container--align-center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .authorization__h1 {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .authorization__logo {
        margin-bottom: 30px;
    }

    .authorization__button-entrance {
        width: 160px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02em;
        background-color: #182E7F;
        color: $whiteColor;
        padding: 10px 50px;
        text-transform: uppercase;
        border: none;
    }

    .authorization__input-container {
        width: 100%;
         display: grid;
         grid-template-columns: 1fr auto auto;
         grid-template-rows: 20px 40px;
         grid-row-gap: 10px;
     }

    .authorization__input-container--email {
        margin-bottom: 20px;
    }

    .authorization__input-container--password {
        margin-bottom: 30px;
    }

    .authorization__input {
        grid-area: 2/1/3/-1;
        height: 40px;
        border: 1px solid #CCCCCC;
        outline: none;
        padding: 12px 60px 12px 10px;
    }

    .authorization__input--error {
        border: 1px solid #EF4058;
    }

    .authorization__button-viewing {
        grid-area: 2/2/3/3;
        align-self: center;
        width: 20px;
        height: 13px;
        border:none;
        background: transparent url("../assets/viewing.svg") no-repeat;
        margin-right: 10px;
    }

    .authorization__label {
        grid-area: 1/1/2/-1;
        width: 100%;
        font-weight: bold;
        font-size: 12px;
        color: $grayColor;
    }

    /*circle*/

    .circle {
        grid-area: 2/-2/3/-1;
        align-self: center;
        position: relative;
        width:16px;
        height:16px;
        border-radius: 20px;
        margin-right: 10px;
    }

    .circle--error{
        background-color: #EF4058;

        &:after{
            content:'';
            position: absolute;
            top:7px;
            left: 2px;
            transform: rotate(-45deg);
            width: 12px;
            height:2px;
            background-color: white;
        }

        &:before{
            content:'';
            position: absolute;
            top:7px;
            left: 2px;
            transform: rotate(45deg);
            width: 12px;
            height:2px;
            background-color: white;
        }
    }

    .circle--access{
        background-color: green;

        &:after{
            content:'';
            position: absolute;
            top:2px;
            left: 6px;
            transform: rotate(45deg);
            width: 3px;
            height:7px;
            background-color: transparent;
            border-right: 2px solid white;
            border-bottom: 2px solid white;
        }
    }


</style>
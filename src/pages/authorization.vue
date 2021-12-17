<template lang="pug">
    div.container--align-center
        form.form(action="", )
            img.logo(src="../assets/logo-block.svg", alt="logo")
            h1.h1 Войти в систему
            div.input-container
                    label.label(for="email") E-mail
                    input#email.input.input--margin(type="text", name="email", required)
                    label.label(for="password") Пароль
                    input#password.input(type="password", name="password", required)
            button.button(type="submit", value="Войти") Войти
  
</template>


<script>
export default {
  name: "",
  data() {
    return {
      
      
    };
  },

  
};
</script>


<style lang="scss">
@import "../assets/scss/general.scss";

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    background-color: $lightBlue;
    padding: 20px 40px 50px;
    margin: 0 auto;
}

    .container--align-center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .h1 {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 20px;
    }

.logo {
    margin-bottom: 30px;
}

.button {
    background-color: #182E7F;
    color: $whiteColor;
    padding: 10px 50px;
    text-transform: uppercase;
    border: none;
}

.input-container {
    margin-bottom: 30px;
}
    .input {
        width: 100%;
        height: 40px;
        border: 1px solid #CCCCCC;
        outline: none;
        margin-top: 10px;
    }

    .input--access {
        background: $whiteColor url("../assets/access.svg") no-repeat;
    }

    .input--error {
        background: $whiteColor url("../assets/access.svg") no-repeat;
    }

.input--margin {
    margin-bottom: 20px;
}

    .label {
        width: 100%;
        font-weight: bold;
        font-size: 12px;
        color: $grayColor;
        margin-bottom: 10px;
    }


</style>
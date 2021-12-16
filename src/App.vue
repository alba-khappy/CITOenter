<template lang="pug">
  div#app
    div.container
      div.block 
        //include ../assets/logo-block.svg
        h1 Войти в систему
        input(type="e-mail")#email
        labellabel(for="email") E-mail
        input(type="password")#password
        label(for="password") Пароль

</template>

<script>

</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.container {
  //background-color: $whiteColor;
}

.block {
  padding: 0 40px 50px;
  //background-color: $lightBlueColor;
}
</style>

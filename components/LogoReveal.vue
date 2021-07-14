<template>
  <img class="LogoReveal" alt="Vuetify Logo" src="/logo.png" />
</template>

<style>
.LogoReveal {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

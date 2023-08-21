<script lang='ts' setup>
</script>

<template>
  <footer>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div class="container content">
      <img src="/public/logo-completa.svg" alt="logo completa da moby" height="80">
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  background-color: var(--variant);
  padding: 50px 10px;

}

footer .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* waves */
footer .wave {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  background: url('/public/wave.png');
  background-size: 1000px 50px;
}

footer .wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWave 4s linear infinite;
}

footer .wave#wave2 {
  z-index: 999;
  opacity: .5;
  bottom: 10px;
  animation: animateWave_02 4s linear infinite;
}

footer .wave#wave3 {
  z-index: 1000;
  opacity: .2;
  bottom: 15px;
  animation: animateWave 3s linear infinite;
}

footer .wave#wave4 {
  z-index: 999;
  opacity: .7;
  bottom: 20px;
  animation: animateWave_02 3s linear infinite;
}

@keyframes animateWave {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-position-x: 0px;
  }
}

@keyframes animateWave_02 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
</style>

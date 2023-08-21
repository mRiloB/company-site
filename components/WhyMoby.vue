<script lang='ts' setup>
</script>

<template>
  <section class="container">
    <div class="section-img">
      <img src="/public/wifi-pic.svg" alt="ilustração de um navio com wifi" width="300">
    </div>
    <div class="section-info">
      <h1>Por que escolher a Moby?</h1>
      <div class="reason">
        <p class="reason-title">Velocidade</p>
        <p>você não vai travar, seja nas redes sociais ou assistindo suas séries e filmes.</p>
      </div>
      <div class="reason">
        <p class="reason-title">Segurança</p>
        <p>não deixamos nossos usuários acessar conteúdos maliciosos e também não vazamos seus dados.</p>
      </div>
      <div class="reason">
        <p class="reason-title">Suporte</p>
        <p>conte com o nosso time de suporte para resolver qualquer problema sem demora.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 50px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

section .section-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: #000000;
  width: 100%;
  height: 100%;
}

section .section-info h1 {
  font-size: 35px;
  color: var(--primary);
}

.reason {
  margin-top: 20px;
}

.reason .reason-title {
  font-weight: bold;
}

section .section-info button {
  padding: 10px;
  border: 1px solid var(--secondary);
  border-radius: 3px;
  background-color: var(--primary);
  color: var(--secondary);
  font-size: 16px;
  font-weight: bold;
}

section .section-img {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

@media only screen and (max-width: 345px) {
  section .section-info h1 {
    font-size: 24px;
  }
}

@media only screen and (max-width: 768px) {
  .section-img {
    display: none !important;
  }
}
</style>

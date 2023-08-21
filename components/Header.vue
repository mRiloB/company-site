<script lang='ts' setup>
</script>

<template>
  <header>
    <AppBar />
    <div class="banner container">
      <div class="header-info">
        <h1>Tecnologia Marítima</h1>
        <p>Mantenha a sua embarcação e seus passageiros conectados com o mundo. Aproveite o máximo da nossa internet via
          satélite.</p>
        <button>Fale Conosco</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 100vh;
  width: 100%;
  background: url('/public/header-background.png');
  background-size: cover;
  background-position: center;
}

header .banner {
  padding: 10px;
}

header .banner .header-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--secondary);
  width: 100%;
  height: calc(100vh - 70px);
}

header .banner .header-info h1 {
  font-size: 40px;
}

header .banner .header-info p {
  margin: 25px 0;
  max-width: 400px;
}

header .banner .header-info button {
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: var(--primary);
  color: var(--secondary);
  font-size: 16px;
  font-weight: bold;
}
</style>

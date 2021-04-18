<template>
  <header class="header">
    <div id="nav">
      <div class="nav-brand">
        <router-link to="/" class="brand">comics</router-link>
      </div>
      <div class="nav-items">
        <router-link to="/">Home</router-link>
        <router-link to="/comic-voted-list">Voted List</router-link>
      </div>
    </div>
  </header>
  <main id="main">
    <router-view/>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #2c3e50;
  width: 100%;
  position: relative;
}

#nav {
  padding: 0 30px;
  display: flex;
  min-height: 62px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  .brand {
    color: inherit;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .nav-items {
    a {
      padding: 0 20px;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

#main {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  #nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

<template>
  <!-- Navigation bar -->
  <nav>
    <div class="navbar-container">
      <!-- Logo -->
      <div class="nav-logo">
        <a href="/"><h1>YOOO</h1></a>
      </div>

      <!-- Navigation links -->
      <div class="nav-links">
        <a href="/">
          <img src="./assets/home.svg" alt="home" />
        </a>
        <RouterLink :to="{ name: 'messages' }">
          <img src="./assets/chat.svg" alt="chat" />
        </RouterLink>
        <a href="/notifications">
          <img src="./assets/notifications.svg" alt="notifications" />
        </a>
        <a href="/search">
          <img src="./assets/search.svg" alt="search" />
        </a>
      </div>

      <!-- User profile -->
      <div class="nav-profile">
        <a href="">
          <img src="https://i.pravatar.cc/300" alt="user" />
        </a>
      </div>
    </div>
  </nav>

  <main class="">
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  background-color: #f7efe5;
}

a {
  text-decoration: none;
  color: #000;
}

nav img {
  width: 40px;
  height: 40px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-links a {
  margin: 0 20px;
}

.nav-profile img {
  border-radius: 50%;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

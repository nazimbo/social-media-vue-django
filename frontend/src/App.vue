<template>
  <!-- Navigation bar -->
  <nav>
    <div class="navbar-container">
      <!-- Logo -->
      <div class="nav-logo">
        <h1>YOOO</h1>
      </div>

      <!-- Navigation links -->
      <div class="nav-links">
        <a href="/">
          <img src="./assets/home.svg" alt="home" />
        </a>
        <a href="/chat">
          <img src="./assets/chat.svg" alt="chat" />
        </a>
        <a href="/notifications">
          <img src="./assets/notifications.svg" alt="notifications" />
        </a>
        <a href="">
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
  background-color: #f8f8f8;
  padding: 1rem 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-links a {
  margin: 0 1rem;
}

img {
  width: 40px;
  height: 40px;
}

.nav-profile img {
  border-radius: 50%;
}
</style>

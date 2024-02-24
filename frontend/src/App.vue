<template>
  <!-- Navigation bar -->
  <nav>
    <div class="navbar-container">
      <!-- Logo -->
      <div class="nav-logo">
        <img src="./assets/logo.svg" alt="logo" />
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
      </div>

      <!-- User profile -->
      <div class="nav-profile">
        <img src="./assets/user.svg" alt="user" />
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

.nav-logo img {
  width: 50px;
}

.nav-links a {
  margin: 0 1rem;
}

.nav-links img {
  width: 50px;
}

.nav-profile img {
  width: 30px;
}
</style>

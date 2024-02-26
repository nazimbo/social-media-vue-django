<template>
  <div class="main-container">
    <div class="main-left">
      <h1>Login</h1>
      <p>This is the login page. Lorem ipsum dolor sit mate. Lorem ipsum dolor</p>
      <p>Don't have an account? <RouterLink :to="{ name: 'signup' }">Click here</RouterLink> to sign up!</p>
    </div>

    <div class="main-right">
      <form action="">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>

        <button class="submit-btn" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px auto;
}

.main-left,
.main-right {
  padding: 30px;
  background-color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

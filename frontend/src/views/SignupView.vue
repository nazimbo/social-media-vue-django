<template>
  <div class="main-container">
    <div class="main-left">
      <h1>Sign Up</h1>
      <p>This is the sign up page. Lorem ipsum dolor sit mate. Lorem ipsum dolor</p>
      <p>Already have an account? <RouterLink :to="{ name: 'login' }">Click here</RouterLink> to login!</p>
    </div>

    <div class="main-right">
      <form action="">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" />
        </div>

        <button class="submit-btn" type="submit">Sign Up</button>
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

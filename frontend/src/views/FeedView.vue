<template>
  <div class="main-container">
    <!-- Left box -->
    <div class="main-left">
      <img src="https://i.pravatar.cc/300" alt="user" />
      <p><strong>Username</strong></p>
      <div class="user-stats">
        <p>Posts: 0</p>
        <p>Friends: 0</p>
      </div>
    </div>

    <!-- Middle box -->
    <div class="main-middle">
      <div class="new-post">
        <form action="">
          <div class="form-group">
            <textarea id="post" rows="5"></textarea>
          </div>
          <button>Add image</button>
          <button class="submit-btn" type="submit">Post</button>
        </form>
      </div>

      <div class="posts">
        <div class="post">
          <p><strong>Username</strong></p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
        </div>
      </div>
    </div>

    <!-- Right box -->
    <div class="main-right"></div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  margin: 20px auto;
}

.main-left,
.main-middle,
.main-right {
  padding: 30px;
  background-color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-left img {
  border-radius: 50%;
  width: 200px;
}

.user-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.main-middle {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

textarea {
  background-color: #ebeaea;
  padding: 10px;
  border-radius: 8px;
  border: none;
  resize: vertical;
}

.new-post {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

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
          <button class="add-image-btn">Add image</button>
          <button class="submit-btn" type="submit">Post</button>
        </form>
      </div>

      <div class="posts">
        <div class="post">
          <div class="posted-by">
            <div>
              <img src="https://i.pravatar.cc/150?img=2" alt="" />
              <p><strong>Username</strong></p>
            </div>
            <div>
              <p>1 minute ago</p>
            </div>
          </div>
          <div class="content">
            <img src="https://i.pravatar.cc/150?img=5" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right box -->
    <div class="main-right">
      <div class="trends">
        <h2>Trends</h2>

        <div class="trend">
          <p>#trend1</p>
          <p>1000 posts</p>
        </div>

        <div class="trend">
          <p>#trend2</p>
          <p>500 posts</p>
        </div>
      </div>

      <div class="suggestions">
        <h2>People you may know</h2>

        <div class="suggestion">
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <p><strong>Username</strong></p>
        </div>

        <div class="suggestion">
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <p><strong>Username</strong></p>
        </div>
      </div>
    </div>
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
  height: fit-content;
}

.main-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-left img {
  border-radius: 50%;
  width: 80%;
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

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.posted-by {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.posted-by div {
  display: flex;
  align-items: center;
}

.posted-by p {
  margin: 0;
  margin-left: 10px;
}

.posted-by img {
  border-radius: 50%;
  width: 50px;
}

.content img {
  width: 100%;
  border-radius: 8px;
}

.main-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.trend {
  display: flex;
  justify-content: space-between;
}

.suggestions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.suggestion {
  display: flex;
  align-items: center;
  gap: 10px;
}

.suggestion img {
  border-radius: 50%;
  width: 50px;
}
</style>

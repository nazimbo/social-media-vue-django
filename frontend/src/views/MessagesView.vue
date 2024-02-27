<template>
  <div class="main-container">
    <div class="main-left">
      <div class="discussions">
        <div class="discussion">
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <p><strong>Username</strong></p>
        </div>

        <div class="discussion">
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <p><strong>Username</strong></p>
        </div>
      </div>
    </div>

    <div class="main-right">
      <div class="chat">
        <div class="message sent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
        </div>

        <div class="message received">
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>

      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button class="submit-btn" type="submit">Send</button>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
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

.discussions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.discussion {
  display: flex;
  gap: 20px;
  align-items: center;
}

.discussion img {
  border-radius: 50%;
  width: 50px;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.message {
  display: flex;
  gap: 20px;
}

.message img {
  border-radius: 50%;
}

.sent {
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.sent p {
  background-color: #f7efe5;
  padding: 10px;
  border-radius: 8px;
}

.received p {
  background-color: #ebeaea;
  padding: 10px;
  border-radius: 8px;
}

textarea {
  background-color: #ebeaea;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
  resize: none;
  margin-bottom: 20px;
}
</style>

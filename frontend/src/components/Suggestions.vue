<template>
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
</template>

<style scoped>
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

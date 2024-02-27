<script setup>
import Suggestions from "@/components/Suggestions.vue";
import Trends from "@/components/Trends.vue";
</script>

<template>
  <div class="main-container">
    <div class="main-left">
      <h1>Search</h1>
      <p>This is the search page. Lorem ipsum dolor sit mate. Lorem ipsum dolor</p>

      <form action="">
        <div class="form-group">
          <label for="search">Search</label>
          <input type="text" id="search" />
        </div>
        <button class="submit-btn" type="submit">Search</button>
      </form>

      <div class="search-results">
        <div class="result">
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <p><strong>Username</strong></p>
        </div>

        <div class="result">
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <p><strong>Username</strong></p>
        </div>
      </div>
    </div>

    <div class="main-right">
      <div class="trends">
        <Trends />
      </div>

      <div class="suggestions">
        <Suggestions />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
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

.search-results {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>

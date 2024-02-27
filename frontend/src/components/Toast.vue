<script setup>
import useToastStore from "@/store/toast";

const store = useToastStore();

return {
  store,
};
</script>

<template>
  <div v-if="store.isVisible">
    {{ store.message }}
  </div>
</template>

<style scoped>
div {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border-radius: 5px;
}
</style>

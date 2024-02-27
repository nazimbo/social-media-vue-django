import { defineStore } from "pinia";

export const useToastStore = defineStore({
  id: "toast",

  state: () => ({
    ms: 0,
    message: "",
    classes: "",
    isVisible: false,
  }),

  actions: {
    show({ ms, message, classes }) {
      this.ms = parseInt(ms);
      this.message = message;
      this.classes = classes;
      this.isVisible = true;
    },

    hide() {
      this.isVisible = false;
    },
  },
});

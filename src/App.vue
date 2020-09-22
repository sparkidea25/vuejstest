<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="updateFirebase">
      <img alt="Vue logo" src="./assets/logo.png">

      <header class="text-center">
        <h2 v-if="completed === 100">
          Completed
          <span class="fa fa-smile-o"></span>
        </h2>
        <h2 v-else>
          Not Completed
          <span class="fa fa-frown-o"></span>
        </h2>
        <hr>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped active"
            aria-valuemin="0"
            aria-valuemax="100"
            :class="{'progress-bar-success' : completed === 100}"
          >{{ completed }}%</div>
        </div>
      </header>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name1">name1</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name1"
          v-model="Name1"
        >
        
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name2">name2</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name2"
          v-model="Name2"
        >
        
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name3">name3</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name3"
          v-model="Name3"
        >
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name4">name4</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name4"
          v-model="Name4"
        >
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name5">name5</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name5"
          v-model="Name5"
        >
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        :disabled="completed != 100"
      >Sign In</button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "App",
  setup() {
    const Name1 = ref("");
    const Name2 = ref("");
    const Name3 = ref("");
    const Name4 = ref("");
    const Name5 = ref("");
    // const completed = computed(
    //   () =>
    //     [Name1, Name2, Name3, Name4, Name5].filter(
    //       v => !!v.value || v.value !== ""
    //     ).length / 100
    // );

    const completed = computed(() => {
      let count = 0
      count += Name1.value.length > 0
      count += Name2.value.length > 0
      count += Name3.value.length > 0
      count += Name4.value.length > 0
      count += Name5.value.length > 0

      return((count / 5) * 100).toFixed(0)
    })

    return {
      Name1,
      Name2,
      Name3,
      Name4,
      Name5,
      completed
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
pre {
  background: #eee;
  padding: 1rem;
  border-radius: 5px;
}
.form-control {
  margin-bottom: 1rem;
}
progress.progress {
  width: 100%;
  background: red;
}
</style>
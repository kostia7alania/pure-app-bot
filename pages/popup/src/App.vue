<script lang="ts" setup>
import { exampleThemeStorage, storage } from "@extension/storage";
import { useCounterStore } from "@src/stores/counter";

const counterStore = useCounterStore();

const toggle = exampleThemeStorage.toggle;

const val = ref();
console.log(123)
const upd = () => {
  console.log('upd')
  debugger
  exampleThemeStorage.get().then((newValue) => {
    val.value = newValue;
    debugger
  });
};

onMounted(upd);
</script>

<template>
  <div class="flex flex-col bg-white">
    <div class="flex flex-col text-center mt-40 mx-auto">
      <span>{{ counterStore.count }}</span>

      -- chrome extension boilerplate

      =={{ val }} ==
      <button
        @click="toggle"
        class="px-7 py-2 bg-blue-500 rounded-lg text-white"
      >
        Click
      </button>

      <button
        @click="upd"
        class=" my-2 bg-blue-500 rounded-lg text-white"
      >
        upd
      </button>
    </div>

    <div class="mt-20 px-10">
      <RouterView />
    </div>
  </div>
</template>

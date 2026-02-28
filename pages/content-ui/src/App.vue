<script lang="ts" setup>
import { onMounted } from "vue";
import { exampleThemeStorage, storage } from "@extension/storage";
import { AutoLikes } from "./features/AutoLikes";

onMounted(() => {
  console.log("content ui loaded");
});

const val = ref();
const toggle = exampleThemeStorage.toggle;

const upd = async () => {
  console.log("upd");
  const newValue = await exampleThemeStorage.get();
  val.value = newValue;
};
</script>

<template>
  <div class="root tw-fixed tw-z-50 tw-bottom-10 tw-right-0 tw-bg-black tw-p-3 tw-rounded-xl">
    <div class="tw-flex tw-gap-4 tw-flex-col ">
    <!--  -->
    <div class="tw-flex tw-gap-4">
      <button class="tw-bg-red-100 hover:tw-bg-red-600  tw-px-2 tw-rounded-lg" @click="toggle">Toggle</button>
      <button class="tw-bg-red-300 hover:tw-bg-red-600 tw-px-2 tw-rounded-lg" @click="upd">UPD {{ val }}</button>
    </div>
    <!--  -->
    <AutoLikes />
  </div>
  </div>
</template>

<style scoped>
.root {
  @apply fixed bottom-10 left-0 z-30;
  @apply flex items-center justify-between;
  @apply gap-2 rounded;
  @apply bg-red-500 px-12 py-12;
}
</style>

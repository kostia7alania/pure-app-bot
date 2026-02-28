<template>
  <button
    class="tw-px-2 tw-bg-white hover:tw-bg-red-600 tw-rounded-lg tw-text-red-500 hover:tw-text-white"
    @click="run"
  >
    Run AutoLikes
  </button>
</template>

<script setup lang="ts">
import { run } from "../model";
</script>

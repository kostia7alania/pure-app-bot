<template>
  <button
    v-if="isStarted"
    class="tw-px-2 tw-bg-white hover:tw-bg-green-600 tw-rounded-lg tw-text-green-500 hover:tw-text-white"
    @click="stopLiking"
  >
    STOP AutoLikes {{ likes }}
  </button>

  <button
    v-else
    class="tw-px-2 tw-bg-white hover:tw-bg-red-600 tw-rounded-lg tw-text-red-500 hover:tw-text-white"
    @click="runLiking"
  >
    Run AutoLikes
    <template v-if="likes">
      {{ likes }}
    </template>
  </button>
</template>

<script setup lang="ts">
import { useAutoLikes } from "../model";
const { likes, isStarted, runLiking, stopLiking } = useAutoLikes();
</script>

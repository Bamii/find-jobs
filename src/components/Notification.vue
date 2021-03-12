<template>
  <div
    v-show="notification.show"
    :class="[notification.success ? 'bg-blue text-white' : 'bg-red text-white']"
    class="flex justify-between items-center mt-3 mb-5 py-3 px-5 rounded-lg font-light"
  >
    {{ notification.message }}
    <div @click="close" :class="[notification.success ? 'text-blue' : 'text-red']" class="inline-block btn bg-white text-blue">
      close
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["notification", "close"]
}
</script>
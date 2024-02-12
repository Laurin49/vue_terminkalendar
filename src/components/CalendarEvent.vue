<template>
  <div id="calendar-event">
    <div class="alert text-center">
      <div>
        <strong>Hoch</strong>
      </div>

      <div>Vue.js 3 lernen</div>

      <div>
        <fa :icon="['fas', 'edit']" role="button" class="px-1"/>
        <fa :icon="['fas', 'trash-alt']" role="button" class="px-1" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CalendarEvent",
}
</script>
<style scoped>
</style>
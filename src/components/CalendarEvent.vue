<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <slot name="eventPriority" 
          :priorityDisplayName="priorityDisplayName">
          <strong>{{ priorityDisplayName }}</strong>
        </slot>
      </div>

      <slot :event="event">{{ event.title }}</slot>

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
  props: {
    event: {
      type: Object,
    }
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case -1: return "Hoch";
        case 0: return "Mittel";
        case 1: return "Tief";
      }
      return "Priority n.a.";
    },
    alertColor() {
      return "alert-" + this.event.color;
    }
  }
}
</script>
<style scoped>
</style>
<template>
  <div id="calendar-settings">
    <div class="card">
      <div class="card-header text-center bg-success text-white">
        <strong>Einstellungen</strong>
      </div>
      <div class="card-body">
        <ul class="nav nav-pills nav-fill">
          <li v-for="i in 2" :key="i" class="nav-item" role="button">
            <a class="nav-link"><fa :icon="['fas', 'list']" /></a>
            <!-- <a class="nav-link"><fa :icon="['fas', 'table']" /></a> -->
          </li>
        </ul>
        <hr />
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" role="button">
            <a class="nav-link"
              ><fa :icon="['fas', 'arrow-down-9-1']" /></a>
          </li>
          <li class="nav-item" role="button">
            <a class="nav-link"
              ><fa :icon="['fas', 'arrow-down-z-a']" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CalendarSettings",
}
</script>
<style scoped>
</style>
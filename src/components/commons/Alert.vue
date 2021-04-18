<template>
  <div class="alert" :class="getColorClass">
    <font-awesome-icon class="fa-2x alert__icon" :icon="['fas', 'exclamation-circle']" /> {{ alertMessage }}
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas)

export default {
  name: 'Alert',

  components: {
    FontAwesomeIcon
  },

  props: {
    alertMessage: {
      type: String,
      required: true
    },

    alertType: {
      type: String,
      required: true
    }
  },

  computed: {
    getColorClass () {
      switch (this.alertType) {
        case 'danger':
          return 'danger'
        case 'warning':
          return 'warning'
        default:
          return 'warning';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
  margin-bottom: 15px;
  border-radius: 5px;

  .alert__icon {
    margin-right: 20px;
  }
}
.danger {
  background-color: #f44336;
}
.warning {
  background-color: #ff9800;
}
.info {
  background-color: #2196F3;
}
</style>
<template>
  <v-app>
    <upload/>
  </v-app>
</template>

<script>
import Upload from './views/Upload.vue'

export default {
    components: {
      'upload': Upload
    }, 
}
</script>

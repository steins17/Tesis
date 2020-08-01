<template>
  <div class="container">
    <vs-row vs-justify="right">
    <vs-button @click="popupActivo=true" color="primary" type="border">Bienvenido</vs-button>
    <vs-popup  title="Bienvenido" :active.sync="popupActivo">
      <p>Página web en desarrollo</p>
    </vs-popup>
    </vs-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo:false,
    }
  }
}
</script>
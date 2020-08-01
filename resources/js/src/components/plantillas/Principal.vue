<template>
  <div class="container">
    <br />
    <div ref="parentSidebar" id="parentx">
      <vs-button @click="active=!active" color="primary" type="filled" icon="list">Open</vs-button>
      <vs-sidebar
        :parent="$refs.parentSidebar"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar size="70px" icon="emoji_people" />

          <h4>Bienvenido a Lis</h4>
        </div>

        <vs-sidebar-item index="1" icon="home">
          <router-link to="/">Inicio</router-link>
        </vs-sidebar-item>

        <vs-sidebar-item index="2" icon="hearing">
          <router-link to="/Nivel1">Nivel1</router-link>
        </vs-sidebar-item>

        <vs-sidebar-item icon="games">
          <router-link to="/Nivel2">Nivel2</router-link>
        </vs-sidebar-item>

        <vs-sidebar-item index="3" icon="chat">
          <router-link to="/Nivel3">Nivel3</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="insert_emoticon">
          <router-link to="/Nivel4">Nivel4</router-link>
        </vs-sidebar-item>

        <vs-divider icon="person" position="left"></vs-divider>
        <vs-sidebar-item index="5" icon="account_box">Profile <router-link to="/Prolife"></router-link></vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        </div>
      </vs-sidebar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false
  })
};
</script>


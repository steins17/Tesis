<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Inicio</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input
            type="email"
            v-model="form.email"
            class="form-control"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <button @click.prevent="login" class="btn btn-primary btn-block">
          Ingresar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../apis/User";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        device_name: "browser"
      },
      errors: []
    };
  },

  methods: {
    login() {
      User.login(this.form)
        .then(response => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data);
          location.href = "/";
          //this.$router.push({ name: "Inicio" });
        })
        .catch(error => {
          console.log(error.response);
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>

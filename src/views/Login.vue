<template>
  <v-container fluid fill-height>
    <v-row
      align="center"
      justify="center"
      class="full-height"
    >
      <v-col cols="12" md="4" sm="6">
        <v-card class="loginClass">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <h1>Login</h1>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  solo
                  required
                  placeholder="Email"
                  @keydown.enter="login"  
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  :disabled="!valid"
                  @click="login"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        // Commit email to Vuex store
        this.$store.commit("setEmail", this.email);
        // Redirect to Home page
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style>
.full-height {
  height: 100vh;
}

.loginClass {
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(210, 210, 248) !important;
}
</style>

<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- <q-btn label="Click Me" color="primary" @click="seamless = true" /> -->

    <q-dialog v-model="show" seamless position="right">
      <q-card style="width: 350px">
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">{{ message }}</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="close" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Notification",

  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  methods: {
    ...mapActions("chat", ["SET_NOTIFICATION"])
  },

  mounted() {
    this.$socket.on("notification", data => {
      this.$store.dispatch("chat/SET_NOTIFICATION", {
        message: data.message,
        type: "info",
        show: true
      });
    });
  }
};
</script>

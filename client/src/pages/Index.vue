<template>
  <q-page>
    <div class="row justify-center">
      <div style="width: 100%; max-width: 400px">
        <chat-message
          v-for="message in messages"
          :key="message.id"
          v-bind="message"
        />
      </div>
    </div>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
  </q-page>
</template>

<script>
import ChatMessage from "components/ChatMessage";
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",

  components: {
    ChatMessage
  },

  computed: {
    ...mapGetters("chat", ["messages"])
  },

  data() {
    return {};
  }
};
</script>

<template>
  <q-page>
    <div class="row justify-center">
      <div style="width: 100%; max-width: 400px">
        <chat-message
          v-for="message in messages"
          :key="message.id"
          v-bind="message"
        />
        <!-- <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['hey, how are you?']"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
        /> -->
        <!-- <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          :text="['doing fine, how r you?']"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
        /> -->
      </div>
    </div>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
  </q-page>
</template>

<script>
import ChatMessage from "components/ChatMessage";

export default {
  name: "PageIndex",
  components: {
    ChatMessage
  },
  data() {
    return {
      messages: [
        {
          text: "How are u?",
          timestamp: "now",
          user: "me",
          avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
          id: "1"
        },
        {
          text: "Fine",
          timestamp: "now",
          user: "Jane",
          avatar: "https://cdn.quasar.dev/img/avatar5.jpg",
          id: "2"
        }
      ]
    };
  }
};
</script>

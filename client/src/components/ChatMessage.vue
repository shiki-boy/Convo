<template>
  <div>
    <q-chat-message
      :name="user"
      :avatar="avatar"
      :text="[text]"
      :stamp="timestamp"
      :sent="user === 'me'"
      :bg-color="user === 'me' ? 'amber-7' : 'primary'"
      :text-color="user === 'me' ? 'black' : 'white'"
    />
  </div>
</template>
<script>
export default {
  name: "ChatMessage",
  props: {
    text: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
};
</script>

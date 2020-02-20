<template>
  <q-page>
    <form @submit.prevent="simulateSubmit" class="q-pa-md">
      <div class="row justify-center">
        <div class="col-3">
          <q-input
            filled
            v-model="room_name"
            label="Room Name"
            hint="Enter the room to join"
            color="teal"
          />
        </div>
      </div>
      <div class="row justify-center">
        <q-btn
          type="submit"
          :loading="submitting"
          label="Join"
          class="q-mt-md"
          color="teal"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </div>
    </form>
  </q-page>
</template>

<script>
export default {
  name: "Join",

  methods: {
    simulateSubmit() {
      this.submitting = true;
        console.log(123);
        
      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false;
      },3000);
    }
  },

  data() {
    return {
      room_name: "",
      submitting: false
    };
  }
};
</script>

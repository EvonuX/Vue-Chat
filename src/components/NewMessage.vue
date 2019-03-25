<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message:</label>
      <input autocomplete="off" type="text" name="new-message" v-model="newMessage">
      <button class="sendBtn btn-floating waves-effect waves-light" @click="addMessage">
        <i class="material-icons">send</i>
      </button>
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        firebase
          .collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          // eslint-disable-next-line
          .catch(err => console.error(err));
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Please enter a message";
      }
    }
  }
};
</script>

<style>
.sendBtn {
  position: absolute;
  right: 30px;
}
</style>

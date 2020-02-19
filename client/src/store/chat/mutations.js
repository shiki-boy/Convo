import Vue from 'vue'

export const MUTATE_SEND_MSG = (state, payload) => {
  console.log('changing state');
  state.messages.push(payload)
}

export const MUTATE_NOTIFICATION = (state, payload) => {
  console.log('changing state noti');
  state.notification = {
    ...state.notification,
    ...payload
  }
}
export const MUTATE_SEND_MSG = (state, payload) => {
  console.log('changing state');
  state.messages.push(payload)
}
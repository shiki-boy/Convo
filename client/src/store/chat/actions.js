import socket from 'boot/socket'

export const SEND_MSG = ({ commit }, payload) => {
  console.log(socket);
  console.log(payload);
  commit('MUTATE_SEND_MSG', payload)
}

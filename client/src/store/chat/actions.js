import socket from 'boot/socket'

export const SEND_MSG = ({ commit }, payload) => {
  socket.emit('sendMsg', payload)
  const obj = {
    text: payload,
    timestamp: new Date().getMinutes(),
    user: "me",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
    id: new Date().toISOString()
  }
  commit('MUTATE_SEND_MSG', obj)
}

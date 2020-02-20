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

export const SET_NOTIFICATION = ({ commit }, payload) => {
  const obj = {
    show: true,
    message: payload.message,
    type: payload.type
  }
  commit('MUTATE_NOTIFICATION', obj)

  setTimeout(() => {
    commit('MUTATE_NOTIFICATION', { show: false })
  }, 5000)
}

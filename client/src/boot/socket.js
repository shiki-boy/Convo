import Vue from 'vue';
import socketIOClient from 'socket.io-client'
import store from '../store'

const socket = socketIOClient('http://localhost:3000')

Vue.prototype.$socket = socket    // this.$socket

export default socket
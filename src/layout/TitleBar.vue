<template lang="pug">
.title-bar
  .title 
    .icon(
      @click="set"
    )
    span.app-name {{appName}}
  .actions
    span(@click="winMin")
      minus
    span
      clone
    span
      close


</template>

<script setup lang="ts">
// @ts-ignore
// import { useElectron } from '@/use/electron';
// const { is, getCurrentWindow } = useElectron()
const appName = import.meta.env.VITE_APP_NAME;
// import { setWin } from '@/util/index';
import Close from '@/assets/icon/close.svg'
import Clone from '@/assets/icon/clone.svg'
import Minus from '@/assets/icon/minus.svg'
import Square from '@/assets/icon/square.svg'

// console.log(is, getCurrentWindow)

const { ipcRenderer } = require('electron');
const { getCurrentWindow } =require('@electron/remote')
console.log(getCurrentWindow)
// import { is } from 'electron-util';
// const isMacos = is.macos;
// import { ipcRenderer } from 'electron';

// const {versions} = useElectron()
// console.log(useElectron())

function winMin(){
  console.log('sssss')
  getCurrentWindow().minimize();
}

function set(){
  // setWin({
  //   resizeable: true,
  //   minimizable: true,
  //   maximizable: true,
  //   minWidth: 500,
  //   minHeight: 100,
  //   with: 500,
  //   height: 800,
  //   maximize: true,
  // })
}
</script>

<style lang="scss">
.title-bar{
  display: flex;
  -webkit-app-region: drag;
  height: 40px;
  background: #f3f3f3;
  user-select: none;
  z-index: 99999;
  font-size: 12px;
  .title{
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: bold;

    .icon {
      width: 14px;
      height: 16px;
      background-image: url('../assets/logo.png');
      background-size: 100%;
      margin-right: 5px;
    }
  }
  .actions{
    -webkit-app-region: no-drag;
    span {
      cursor: pointer;
    }
  }
}
</style>
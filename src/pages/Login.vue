<template lang="pug">
b 登录
el-button(
  @click="set"
) 登录
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
// @ts-ignore
// import { useElectron } from '@/use/electron';
// const { is, ipcRenderer } = useElectron()
// import { setWin } from '@/util/index';
const { ipcRenderer } = require('electron');

function set(){
  console.log('test')
  ipcRenderer.send('SET_WIN', {
    resizeable: true,
    minimizable: true,
    maximizable: true,
    minWidth: 1310,
    minHeight: 800,
    with: 1310,
    height: 800,
    maximize: true,
  })
}

</script>
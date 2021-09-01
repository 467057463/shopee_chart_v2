import { useIpcRenderer } from '@/use/electron';
const ipcRenderer = useIpcRenderer();

// 设置窗口
export function setWin(option){
  ipcRenderer.send('SET_WIN', option)
}
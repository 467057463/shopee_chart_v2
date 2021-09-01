// @ts-nocheck
import { ipcMain } from "electron";

export default function ipc(win){
  ipcMain.on('SET_WIN', (event, opt) => {
    const originSize = win.getSize();
    win.setResizable(opt.resizeable);
    win.setMinimizable(opt.minimizable);
    win.setMaximizable(opt.maximizable);
    win.setMinimumSize(opt.minWidth, opt.minHeight);

    win.setSize(opt.with, opt.height);
    if (originSize.join() !== [opt.with, opt.height].join()) {
      win.center();
    }
    opt.maximize && win.maximize();
  })
}

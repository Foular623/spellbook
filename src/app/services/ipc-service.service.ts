import { Injectable, NgZone } from '@angular/core';
import { IpcRenderer } from 'electron';


@Injectable({
  providedIn: 'root'
})
export class IpcServiceService {

  private _ipc: IpcRenderer | undefined


  constructor(
    private _ngZone: NgZone
  ) { 
    if (<any>window.require) {
      try {
        this._ngZone.run(() => {

          this._ipc = window.require("electron").ipcRenderer;
        })
      }
      catch (e) {
        throw e;
      }
    } 
    else {
      console.warn("Electron IPC no ha sido cargado!")
    }
  }

  on(channel: string, listener: any) {
    if (!this._ipc) return;

    this._ipc.on(channel, listener);
  }

  send(channel: string, ...args: any[]) {
    if (!this._ipc) return;

    this._ipc.send(channel, ...args);
  }
}

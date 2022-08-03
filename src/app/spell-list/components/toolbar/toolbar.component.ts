import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  constructor(
    private primengConfig:    PrimeNGConfig,
    private dialogService:    DialogService,
    private message:          MessageService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  newSpell() {
    const ref = this.dialogService.open(DialogAddEditComponent, {
      header: `Nuevo conjuro`,
      width: '70%'
    })

    ref.onClose.subscribe((result: string[]) => {
      this.showSuccess(`El conjuro ${ result[1] } a sido creado con exito.` )
    });
  }

  showSuccess(message: string) {
    this.message.add({severity:'success', summary: 'Exito', detail: message});
  }
  

}

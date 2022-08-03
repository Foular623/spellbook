import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
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
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  newSpell() {
    const ref = this.dialogService.open(DialogAddEditComponent, {
      header: `Nuevo conjuro`,
      width: '70%'
    })

    ref.onClose.subscribe(() => {
      //this.showSuccess(`El conjuro ${ spell.Name } a sido eliminado con exito.` );
    });
  }

}

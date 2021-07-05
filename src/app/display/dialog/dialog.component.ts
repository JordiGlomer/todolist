import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
formGroup!:FormGroup;
  constructor(private dialogRef: MatDialogConfig<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)data:FormGroup) {
      this.formGroup=data
    }

  ngOnInit(): void {
  }

}

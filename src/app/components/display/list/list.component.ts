import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/display/dialog/dialog.component';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

@Input() formGroup!: FormGroup
@Input() itemList!:Item[];
  constructor(private dialog: MatDialog) { }


  openDialog(item:Item){
    const dialogConfig = new MatDialogConfig();

    this.formGroup.setValue(item);
      dialogConfig.autoFocus = true;
      dialogConfig.data = this.formGroup;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  }
  ngOnInit(): void {
  }
}

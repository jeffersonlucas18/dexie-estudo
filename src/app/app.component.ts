import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DexieService, db } from './config/dexie.service';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'estudos-bd-dexie';
  public formCreate: FormGroup = new FormGroup({});
  public todoLists$ = liveQuery(() => db.client.toArray());

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    db.createClient(); // criando a tabela
    this. _createForm()
  }

  public save(): void {
    db.setValueTableClient({name: this.formCreate.value.name})
  }

  private _createForm(){
    this.formCreate = this._formBuilder.group({
      name: [null]
    })
  }


}

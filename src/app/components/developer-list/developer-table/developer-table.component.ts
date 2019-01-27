import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer/ideveloper';

@Component({
  selector: 'app-developer-table',
  templateUrl: './developer-table.component.html',
  styleUrls: ['./developer-table.component.css']
})
export class DeveloperTableComponent implements OnInit {

  @Input() data: IDeveloper[];
  @Output() removeDeveloper: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public remove(id: number): void {
    this.removeDeveloper.emit(id);
  }

}

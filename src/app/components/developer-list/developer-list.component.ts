import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer/developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  constructor(public developerService: DeveloperService) {
  }

  ngOnInit() {
  }

  public onRemoveDeveloper(id: number): void {
    this.developerService.removeDeveloper(id);
  }

}

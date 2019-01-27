import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer/developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-editor',
  templateUrl: './developer-editor.component.html',
  styleUrls: ['./developer-editor.component.css']
})
export class DeveloperEditorComponent implements OnInit {

  public id: number;
  public name: string;

  constructor(private developerService: DeveloperService, private router: Router) { }

  ngOnInit() {
  }

  public save(): void {
    this.developerService.addDeveloper({ id: this.id, name: this.name });
    this.router.navigate(['developer/list']);
  }

}

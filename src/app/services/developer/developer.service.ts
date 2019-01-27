import { Injectable } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer/ideveloper';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService implements Resolve<any> {
  public static LOCAL_STORAGE_DEVELOPERS_KEY = 'LOCAL_STORAGE_DEVELOPERS_KEY';

  private developers: IDeveloper[] = [];
  private developersSubject: BehaviorSubject<IDeveloper[]> = new BehaviorSubject([]);

  constructor() {
  }

  public get list(): Observable<IDeveloper[]> {
    return this.developersSubject;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this.loadDevelopers();
    return of(this.developers);
  }

  public loadDevelopers(): void {
    this.developers = JSON.parse(window.localStorage.getItem(DeveloperService.LOCAL_STORAGE_DEVELOPERS_KEY)) || [];
    this.developersSubject.next(this.developers);
  }

  public addDeveloper(developer: IDeveloper): void {
    this.developers.push(developer);
    this.saveDevelopers();
    this.developersSubject.next(this.developers);
  }

  public removeDeveloper(id: number): void {
    const index = this.developers.findIndex(d => d.id === id);
    this.developers.splice(index, 1);
    this.saveDevelopers();
  }

  public saveDevelopers(): void {
    window.localStorage.setItem(DeveloperService.LOCAL_STORAGE_DEVELOPERS_KEY, JSON.stringify(this.developers));
  }
}

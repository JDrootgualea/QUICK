import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../share/header/Interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class ResultadoDeportistasService {

  constructor(private httpClient:HttpClient) { 

  }
  public getResults():Observable<Player[]>{
   return this.httpClient.get<Player[]>("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");

  }
}

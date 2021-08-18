import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ResultadoDeportistasService } from 'src/app/core/resultado-deportistas.service';
import { Player } from 'src/app/share/header/Interfaces/player';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public dataSource: Player[]=[]
  displayedColumns: string[] = ['athlete', 'age', 'country', 'year','date','sport','gold','silver','bronze','total'];

  constructor(private resultadoDeportistasService:ResultadoDeportistasService) { }

  ngOnInit(): void {
    this.getResults()
  }
public getResults(){
 this.resultadoDeportistasService.getResults().subscribe(res=>{
   this.dataSource=res;

   console.log(res);
 }) 
}
}

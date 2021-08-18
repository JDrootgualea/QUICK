import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from 'src/app/core/session-manager.service';
import { userDataModel } from './Interfaces/user-data.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userData={} as userDataModel
  constructor(private sessionManagerService:SessionManagerService) { 
    
  }

  ngOnInit(): void {
    this.sessionManagerService.userData$.subscribe(res=>{
      this.userData=res;
    })
  }
 public close (){
   this.sessionManagerService.closeSession()
 }
}

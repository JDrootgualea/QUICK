import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { userDataModel } from '../share/header/Interfaces/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  private userData = new BehaviorSubject<userDataModel>({} as any);
  public userData$ = this.userData.asObservable()

  constructor(private router:Router) { }

  public login(username:string):boolean{
   
    if(this.isNotValidUser(username)){
      return false;
    }
    sessionStorage.setItem("logeIn","true");
    this.profileHomeRedirect(username);

    return true;
  }

  public closeSession(){
    sessionStorage.removeItem("logeIn");
    this.router.navigate(["login"])
  }

  private isNotValidUser(username:string):boolean{
  return username!="administrador" && username!="coordinador"
  }

private profileHomeRedirect(username:string):void{

 if(username==="administrador"){
  this.userData.next({
      perfil:"Julian",
      usuario: username
  })
  
this.router.navigate(["administrador"]);
 }else if( username==="coordinador"){
  this.userData.next({
    perfil:"Julian",
    usuario: username
})
  this.router.navigate(["coordinador"]);
 }
  }
}

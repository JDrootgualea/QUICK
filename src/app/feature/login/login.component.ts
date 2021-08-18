import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SessionManagerService } from 'src/app/core/session-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder, 
              private sessionManagerService:SessionManagerService) { }

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  public onSubmit():void{
    console.log(this.sessionManagerService.login(this.loginForm.get("username")?.value));
    
  }

}

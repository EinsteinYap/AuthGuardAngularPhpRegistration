import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; 
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private dataService:ApiService,
    private router:Router
  ) {
    this.angForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(1),Validators.email]],
      password:['',Validators.required]
    
    });
   }

  ngOnInit(): void {
  }


  postdata(angForm:any){
    this.dataService.userlogin(
      angForm.value.email,
      angForm.value.password,
    ).pipe(first()).subscribe((data:any)=>{
      console.log(data);
      if(data.message =='success'){
        this.router.navigate(['/dashboard']);
      }
    },
    (error:any)=>{
      alert("User Name or password is incorrect")
    }
    )
  }
}

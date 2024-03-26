/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  user: string | undefined;
  name: string = '';
  islogin: boolean = false;

  // static success: any | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
  constructor(private http: HttpClient, private router: Router) { }

  // sinup api intregation
  usersignup(value: string) {
    this.http.post<any>("https://cloudshop-zeta.vercel.app/api/register", value).subscribe((response) => {
    console.log(response)
      if (response.success === true) {
        this.router.navigate(["/auth/signin"]);
        this.name = response.name;
      }
    }
    )
  }

  addcustomer(values :string){
    this.http.post<any>("https://cloudshop-zeta.vercel.app/api/register-customer" , values).subscribe((responce) =>{
    console.log(responce);
    })
  }
  usersignin(value: string) {
    this.http.post<any>("https://cloudshop-zeta.vercel.app/api/login", value).subscribe((response) => {
      //  successresp : response.success === true
      if (response.success === true) {
        this.router.navigate(["analytics"])
        console.log(response);
        this.name = response.data.name;
        this.islogin = response.success
        
        localStorage.setItem('name', this.name);

      }
    }
    )
  }

}

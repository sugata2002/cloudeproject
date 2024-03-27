import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApiComponent } from 'src/app/api/api/api.component';
// import { from } from 'rxjs';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export default class SignInComponent implements OnInit {
  from !: FormGroup;

  constructor(private apicom: ApiComponent, private frombuilder: FormBuilder) { }
  ngOnInit(): void {
    this.from = this.frombuilder.group({
      email: "",
      password: "",
      type: 0
    })

  }
  sinin() {
    const users = this.from.getRawValue()
    this.apicom.usersignin(users);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApiComponent } from 'src/app/api/api/api.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent implements OnInit {
  from!: FormGroup
  constructor(private apicom: ApiComponent, private frombuilder: FormBuilder) { }
  ngOnInit(): void {
    this.from = this.frombuilder.group({
      name: "",
      email: "",
      phone: "",
      password: "",
      type: "0"
    })
  }

  sinup() {
    const user = this.from.getRawValue()
    this.apicom.usersignup(user);
  }
}

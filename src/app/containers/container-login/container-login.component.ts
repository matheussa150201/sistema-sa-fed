import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../models/login";

@Component({
  selector: 'app-container-login',
  templateUrl: './container-login.component.html',
  styleUrls: ['./container-login.component.scss']
})
export class ContainerLoginComponent implements OnInit {

  formLogin! : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormularioLogin(new Login())
  }

  public criarFormularioLogin(login: Login){
    this.formLogin = this.formBuilder.group({
      email : [login.email, [Validators.required]],
      senha :  [login.senha, [Validators.required]]
    })
  }

  public entrar(){
    window.alert('email: ' + this.formLogin?.value?.email + ' senha : ' + this.formLogin?.value?.senha)
  }

}

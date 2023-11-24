import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSaved = false;
  user = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _resto: RestoService) { }

  ngOnInit(): void {
  }

  saveUser() {
    this._resto.register(this.user.value).subscribe((data:any) => {
      this.isSaved = true;
    },
    (error) => {
      console.log(error)
    });
  }

  closeAlert() {
    this.isSaved = false;
  }
}

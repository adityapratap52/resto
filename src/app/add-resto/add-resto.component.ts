import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  resto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  isSaved = false;

  constructor(
            private _resto: RestoService
  ) { }

  ngOnInit(): void {
  }

  addResto() {
    let obj = this.resto.value;
    if (obj.name.trim() != '' || obj.email.trim() != '' || obj.address.trim() != '') {
      this._resto.addResto(obj).subscribe((data:any) => {
        console.log('success')
        console.log(data);
        this.isSaved = true;
        this.resto.reset();
      },
      (error) => {
        console.log(error)
      });
    }else {
      console.log("Data is not save!!")
    }
  }

  closeAlert() {
    this.isSaved = false;
  }
}

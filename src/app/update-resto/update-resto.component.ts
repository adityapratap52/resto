import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  resto = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
            private _resto: RestoService,
            private _rout: ActivatedRoute,
            private _router: Router
  ) { }

  ngOnInit(): void {
    let id = this._rout.snapshot.params.id;
    this._resto.getById(id).subscribe((data:any) => {
      console.log(data)
      this.resto = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        email: new FormControl(data.email),
        address: new FormControl(data.address)
      });
    },
    (error) => {
      console.log(error);
    });
  }

  editResto() {
    let id = this._rout.snapshot.params.id;
    this._resto.editResto(this.resto.value,id).subscribe((data:any) => {
      this._router.navigate(['']);
    },
    (error) => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collections:any=[];

  constructor(
            private _resto: RestoService
  ) { }

  ngOnInit(): void {
    this._resto.getList().subscribe((data:any) => {
      this.collections = data;
    },
    (error) => {
      console.log(error);
    });
  }

  deleteResto(id:any) {
    this._resto.deleteResto(id).subscribe((data:any) => {
      console.log('Restaurant is successfully deleted!');
      this.collections = this.collections.filter((collection:any) => collection.id != id);
    },
    (error) => {
      console.log(error);
    })
  }
}

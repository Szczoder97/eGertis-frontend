import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  ngOnInit(): void {
    this.items = [
      {id: 1, name: 'dupa'},
      {id: 2, name: 'pudzian'}
    ]
  }
  onSubmit(form: NgForm) {

  }

}

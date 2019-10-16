import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  item={
    name:'',
    price:0
  }
  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit() {
  }
  Save(event){
    this.itemService.createitem(this.item)
    this.router.navigate([''])
    event.preventDefault()
  }

}

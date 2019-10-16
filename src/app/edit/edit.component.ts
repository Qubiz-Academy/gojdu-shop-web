import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  item;
  id;
  constructor(private activated : ActivatedRoute, private itemService:ItemService, private router:Router) {

   }

  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id')
      this.itemService.getItembyid(this.id).subscribe(x=>this.item=x.data())
  }
  Save(){
    this.itemService.updateitem(this.id, this.item)
    this.router.navigate(['/'])
  }

}

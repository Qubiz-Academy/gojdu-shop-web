import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {

  items;
  ngOnInit(): void {
    this.items=this.itemservice.getItems()
  }
  constructor(private itemservice: ItemService, public router:Router) {

  }
}

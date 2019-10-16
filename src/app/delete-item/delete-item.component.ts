import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {
  @Input()id;
  @Output()deleted:EventEmitter<void>=new EventEmitter();
  constructor(private itemservice: ItemService,private modalService: NgbModal) {
    
   }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.itemservice.deleteitem(this.id)
      this.deleted.emit();
    }, (reason) => {
    });
  }

}

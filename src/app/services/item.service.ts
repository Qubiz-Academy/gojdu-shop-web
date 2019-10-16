import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ItemService {
    constructor(private aft: AngularFirestore) {

    }
    getItems() {
        return this.aft.collection("items").valueChanges({idField: 'id'})
    }
    getItembyid(id: string) {
        return this.aft.doc("items/" + id).get()
    }
    updateitem(id, item) {
        console.log(id)
        this.aft.doc("items/" + id)
        .set({
            name:item.name,
            price:item.price,
            description:item.description
        },{merge: true})
    }
    createitem(item) {
        this.aft.doc("items/" +this.aft.createId()).set({
            name: item.name,
            price: item.price,
            description:item.description || ''
        })
    }
    deleteitem(id) {
        this.aft.doc("items/"+id).delete()
    }
}

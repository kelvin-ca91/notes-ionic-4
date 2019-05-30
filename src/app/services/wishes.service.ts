import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
@Injectable({
  providedIn: 'root'
})
export class WishesService {
  
  lists: List[] = [];

  constructor() { 
    const wishOne = new List('My first note');
    const wishTwo = new List('My second note');
    this.lists.push(wishOne, wishTwo, wishOne, wishTwo, wishOne, wishTwo, wishOne, wishTwo, wishOne, wishTwo, wishOne, wishTwo, wishOne, wishTwo);
  }
}

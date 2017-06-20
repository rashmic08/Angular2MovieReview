import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'search-form',
  template: `
  <div class="inner-container">    
    <form (ngSubmit)="toSearch()">
    <div class="size-container">   
     <label id="collection-heading">Movie Reviews</label>
     <div>
     <input id="input-head" type="text" [(ngModel)]="searchKey" size="30" placeholder="search movies">
     <input type="submit" value="Search" id="btn-shorten">
     <div>
     <label>{{previousSearchKey}}</label>      
     </div>
     </div>
     </div>
     </form>      
    </div>  
          
      `
})
export class SearchForm {
  @Output() newSearch = new EventEmitter<string>();
  
  searchKey = '';
  previousSearchKey = '';

  toSearch() {
    if (this.searchKey) {
      this.newSearch.next(this.searchKey);
    }
    
    this.previousSearchKey = this.searchKey;
    this.searchKey = '';
  }
  
}


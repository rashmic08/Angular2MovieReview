import {bootstrap} from 'angular2/platform/browser';
import {Component, enableProdMode, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {SearchForm} from './search_form';
import {ArticleApi} from './MovieAPI';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app',
  template: `
  <div class="main-container">
  <search-form (newSearch)="toSearch($event)"></search-form>
 
   <table width=80% cellpadding=10>
     <tbody>
     <tr *ngFor="#article of articles | async" class="border-left-bottom">
      <td width=20%>By {{article.byline}}<br>{{article.publication_date}}<br><a href={{article.link.url}} target="_blank">Read Review</a></td>
      <td><b>{{article.display_title}}</b><br>{{article.summary_short}} </td>
      <td><img [src]="article.multimedia.src" /></td>
     </tr>          
      </tbody>
    </table>  
    </div>
          
   `, 
  providers: [HTTP_PROVIDERS, ArticleApi],
  directives: [SearchForm]
})
class App implements OnInit {
  articles: Observable<any>;
  constructor(private articleApi: ArticleApi) { }
  
  ngOnInit() {
    this.articles = this.articleApi.seachArticle('ring');
    }
  
  toSearch(searchKey) {

    console.log(" -- addTask in App " + searchKey);
    this.articles = this.articleApi.seachArticle(searchKey);
  }
}

bootstrap(App).catch(err => console.error(err));

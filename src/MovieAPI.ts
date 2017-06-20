import {Injectable} from 'angular2/core';
import {Http, Headers, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
const API_KEY = '8ff357859a6245b5b28d57ee164d1c08';
@Injectable()
export class ArticleApi {
  constructor(private http: Http) 
  {}
  seachArticle(query) {
    const endpoint = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
    const searchParams = new URLSearchParams()
    searchParams.set('api-key', API_KEY);
    searchParams.set('query', query);
    return this.http
      .get(endpoint, {search: searchParams})
      .map(res => res.json().results)
      .map(results => {
        results.map(item => {
          if (item.multimedia != null && item.multimedia.length > 1)
          {
            item.multimedia.src = 'http://www.nytimes.com/' + item.multimedia.src;
            console.log(item.multimedia.src);
          }
        
        });
        return results;
      });
  }
  
  postExample(someData) {
    const endpoint = 'https://your-endpoint';
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .post(endpoint, JSON.stringify(someData), { headers: headers })
      .map(res => res.json());
  }
}

System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './search_form', './MovieApi'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, search_form_1, MovieApi_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (search_form_1_1) {
                search_form_1 = search_form_1_1;
            },
            function (MovieApi_1_1) {
                MovieApi_1 = MovieApi_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(articleApi) {
                    this.articleApi = articleApi;
                }
                App.prototype.ngOnInit = function () {
                    this.articles = this.articleApi.seachArticle('ring');
                };
                App.prototype.toSearch = function (searchKey) {
                    console.log(" -- addTask in App " + searchKey);
                    this.articles = this.articleApi.seachArticle(searchKey);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n  <div class=\"main-container\">\n  <search-form (newSearch)=\"toSearch($event)\"></search-form>\n \n   <table width=80% cellpadding=10>\n     <tbody>\n     <tr *ngFor=\"#article of articles | async\" class=\"border-left-bottom\">\n      <td width=20%>By {{article.byline}}<br>{{article.publication_date}}<br><a href={{article.link.url}} target=\"_blank\">Read Review</a></td>\n      <td><b>{{article.display_title}}</b><br>{{article.summary_short}} </td>\n      <td><img [src]=\"article.multimedia.src\" /></td>\n     </tr>          \n      </tbody>\n    </table>  \n    </div>\n          \n   ",
                        providers: [http_1.HTTP_PROVIDERS, MovieApi_1.ArticleApi],
                        directives: [search_form_1.SearchForm]
                    }), 
                    __metadata('design:paramtypes', [MovieApi_1.ArticleApi])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map
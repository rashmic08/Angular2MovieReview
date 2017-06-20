System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var API_KEY, ArticleApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            API_KEY = '8ff357859a6245b5b28d57ee164d1c08';
            ArticleApi = (function () {
                function ArticleApi(http) {
                    this.http = http;
                }
                ArticleApi.prototype.seachArticle = function (query) {
                    var endpoint = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('api-key', API_KEY);
                    searchParams.set('query', query);
                    return this.http
                        .get(endpoint, { search: searchParams })
                        .map(function (res) { return res.json().results; })
                        .map(function (results) {
                        results.map(function (item) {
                            if (item.multimedia != null && item.multimedia.length > 1) {
                                item.multimedia.src = 'http://www.nytimes.com/' + item.multimedia.src;
                                console.log(item.multimedia.src);
                            }
                        });
                        return results;
                    });
                };
                ArticleApi.prototype.postExample = function (someData) {
                    var endpoint = 'https://your-endpoint';
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http
                        .post(endpoint, JSON.stringify(someData), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ArticleApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ArticleApi);
                return ArticleApi;
            }());
            exports_1("ArticleApi", ArticleApi);
        }
    }
});
//# sourceMappingURL=MovieAPI.js.map
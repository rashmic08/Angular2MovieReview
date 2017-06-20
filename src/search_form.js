System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SearchForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchForm = (function () {
                function SearchForm() {
                    this.newSearch = new core_1.EventEmitter();
                    this.searchKey = '';
                    this.previousSearchKey = '';
                }
                SearchForm.prototype.toSearch = function () {
                    if (this.searchKey) {
                        this.newSearch.next(this.searchKey);
                    }
                    this.previousSearchKey = this.searchKey;
                    this.searchKey = '';
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchForm.prototype, "newSearch", void 0);
                SearchForm = __decorate([
                    core_1.Component({
                        selector: 'search-form',
                        template: "\n  <div class=\"inner-container\">    \n    <form (ngSubmit)=\"toSearch()\">\n    <div class=\"size-container\">   \n     <label id=\"collection-heading\">Movie Reviews</label>\n     <div>\n     <input id=\"input-head\" type=\"text\" [(ngModel)]=\"searchKey\" size=\"30\" placeholder=\"search movies\">\n     <input type=\"submit\" value=\"Search\" id=\"btn-shorten\">\n     <div>\n     <label>{{previousSearchKey}}</label>      \n     </div>\n     </div>\n     </div>\n     </form>      \n    </div>  \n          \n      "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchForm);
                return SearchForm;
            }());
            exports_1("SearchForm", SearchForm);
        }
    }
});
//# sourceMappingURL=search_form.js.map
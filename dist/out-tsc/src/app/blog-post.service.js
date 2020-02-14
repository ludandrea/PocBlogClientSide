import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let BlogPostService = class BlogPostService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myApiUrl = environment.appUrl;
    }
    ngOnInit() {
    }
    getBlogPosts() {
        return this.http.get(this.myApiUrl)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    getBlogPost(postId) {
        return this.http.get(this.myApiUrl + postId)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    saveBlogPost(blogPost) {
        return this.http.post(this.myApiUrl, JSON.stringify(blogPost), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    updateBlogPost(postId, blogPost) {
        return this.http.put(this.myApiUrl + postId, JSON.stringify(blogPost), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    deleteBlogPost(postId) {
        return this.http.delete(this.myApiUrl + postId)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
BlogPostService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BlogPostService);
export { BlogPostService };
//# sourceMappingURL=blog-post.service.js.map
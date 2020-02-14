import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogPostComponent = class BlogPostComponent {
    constructor(blogPostService, avRoute) {
        this.blogPostService = blogPostService;
        this.avRoute = avRoute;
        const idParam = 'id';
        if (this.avRoute.snapshot.params[idParam]) {
            this.postId = this.avRoute.snapshot.params[idParam];
        }
    }
    ngOnInit() {
        this.loadBlogPost();
    }
    loadBlogPost() {
        this.blogPost$ = this.blogPostService.getBlogPost(this.postId);
    }
};
BlogPostComponent = __decorate([
    Component({
        selector: 'app-blog-post',
        templateUrl: './blog-post.component.html',
        styleUrls: ['./blog-post.component.css']
    })
], BlogPostComponent);
export { BlogPostComponent };
//# sourceMappingURL=blog-post.component.js.map
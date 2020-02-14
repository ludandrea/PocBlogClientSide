import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogPostsComponent = class BlogPostsComponent {
    constructor(blogPostService) {
        this.blogPostService = blogPostService;
    }
    ngOnInit() {
        this.loadBlogPosts();
    }
    loadBlogPosts() {
        this.blogPosts$ = this.blogPostService.getBlogPosts();
    }
    delete(postId) {
        const ans = confirm('Deseja deletar o post? ' + postId);
        if (ans) {
            this.blogPostService.deleteBlogPost(postId).subscribe((data) => {
                this.loadBlogPosts();
            });
        }
    }
};
BlogPostsComponent = __decorate([
    Component({
        selector: 'app-blog-posts',
        templateUrl: './blog-posts.component.html',
        styleUrls: ['./blog-posts.component.css']
    })
], BlogPostsComponent);
export { BlogPostsComponent };
//# sourceMappingURL=blog-posts.component.js.map
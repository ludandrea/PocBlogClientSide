import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let BlogPostAddEditComponent = class BlogPostAddEditComponent {
    constructor(blogPostService, formBuilder, avRoute, router) {
        this.blogPostService = blogPostService;
        this.formBuilder = formBuilder;
        this.avRoute = avRoute;
        this.router = router;
        const idParam = 'id';
        this.actionType = 'Add';
        this.formCreator = 'creator';
        this.formTitle = 'title';
        this.formBody = 'body';
        if (this.avRoute.snapshot.params[idParam]) {
            this.postId = this.avRoute.snapshot.params[idParam];
        }
        this.form = this.formBuilder.group({
            postId: 0,
            creator: ['', [Validators.required]],
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        if (this.postId > 0) {
            this.actionType = 'Edit';
            this.blogPostService.getBlogPost(this.postId)
                .subscribe(data => (this.existingBlogPost = data,
                this.form.controls[this.formCreator].setValue(data.creator),
                this.form.controls[this.formTitle].setValue(data.title),
                this.form.controls[this.formBody].setValue(data.body)));
        }
    }
    save() {
        if (!this.form.valid) {
            return;
        }
        if (this.actionType === 'Add') {
            let blogPost = {
                dt: new Date(),
                creator: this.form.get(this.formCreator).value,
                title: this.form.get(this.formTitle).value,
                body: this.form.get(this.formBody).value
            };
            this.blogPostService.saveBlogPost(blogPost)
                .subscribe((data) => {
                this.router.navigate(['/blogpost', data.postId]);
            });
        }
        if (this.actionType === 'Edit') {
            let blogPost = {
                postId: this.existingBlogPost.postId,
                dt: this.existingBlogPost.dt,
                creator: this.existingBlogPost.creator,
                title: this.form.get(this.formTitle).value,
                body: this.form.get(this.formBody).value
            };
            this.blogPostService.updateBlogPost(blogPost.postId, blogPost)
                .subscribe((data) => {
                this.router.navigate([this.router.url]);
            });
        }
    }
    cancel() {
        this.router.navigate(['/']);
    }
    get creator() { return this.form.get(this.formCreator); }
    get title() { return this.form.get(this.formTitle); }
    get body() { return this.form.get(this.formBody); }
};
BlogPostAddEditComponent = __decorate([
    Component({
        selector: 'app-blog-post-add-edit',
        templateUrl: './blog-post-add-edit.component.html',
        styleUrls: ['./blog-post-add-edit.component.css']
    })
], BlogPostAddEditComponent);
export { BlogPostAddEditComponent };
//# sourceMappingURL=blog-post-add-edit.component.js.map
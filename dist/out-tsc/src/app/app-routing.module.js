import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';
import { ChatComponent } from './chat/chat.component';
const routes = [
    { path: '', component: BlogPostsComponent, pathMatch: 'full' },
    { path: 'blogpost/:id', component: BlogPostComponent },
    { path: 'add', component: BlogPostAddEditComponent },
    { path: 'blogpost/edit/:id', component: BlogPostAddEditComponent },
    { path: 'chat/:id', component: ChatComponent },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
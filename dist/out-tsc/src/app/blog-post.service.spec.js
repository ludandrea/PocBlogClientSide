import { TestBed } from '@angular/core/testing';
import { BlogPostService } from './blog-post.service';
describe('BlogPostService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(BlogPostService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=blog-post.service.spec.js.map
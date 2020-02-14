import { async, TestBed } from '@angular/core/testing';
import { BlogPostAddEditComponent } from './blog-post-add-edit.component';
describe('BlogPostAddEditComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlogPostAddEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BlogPostAddEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blog-post-add-edit.component.spec.js.map
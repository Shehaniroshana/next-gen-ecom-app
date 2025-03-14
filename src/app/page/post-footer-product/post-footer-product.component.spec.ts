import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFooterProductComponent } from './post-footer-product.component';

describe('PostFooterProductComponent', () => {
  let component: PostFooterProductComponent;
  let fixture: ComponentFixture<PostFooterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFooterProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFooterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

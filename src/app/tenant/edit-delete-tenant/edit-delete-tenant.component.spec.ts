import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteTenantComponent } from './edit-delete-tenant.component';

describe('EditDeleteTenantComponent', () => {
  let component: EditDeleteTenantComponent;
  let fixture: ComponentFixture<EditDeleteTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

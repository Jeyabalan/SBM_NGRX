import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteRoomComponent } from './edit-delete-room.component';

describe('EditDeleteRoomComponent', () => {
  let component: EditDeleteRoomComponent;
  let fixture: ComponentFixture<EditDeleteRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

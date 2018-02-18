import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsGridComponent } from './room-details-grid.component';

describe('RoomDetailsGridComponent', () => {
  let component: RoomDetailsGridComponent;
  let fixture: ComponentFixture<RoomDetailsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

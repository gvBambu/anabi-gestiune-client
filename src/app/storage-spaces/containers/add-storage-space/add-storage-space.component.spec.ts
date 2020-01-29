import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorageSpaceComponent } from './add-storage-space.component';

describe('AddStorageSpaceComponent', () => {
  let component: AddStorageSpaceComponent;
  let fixture: ComponentFixture<AddStorageSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStorageSpaceComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStorageSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

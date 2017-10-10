import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroContatoComponent } from './cadatro-contato.component';

describe('CadatroContatoComponent', () => {
  let component: CadatroContatoComponent;
  let fixture: ComponentFixture<CadatroContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadatroContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadatroContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

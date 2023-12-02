import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWithChancesComponent } from './game-with-chances.component';

describe('GameWithChancesComponent', () => {
  let component: GameWithChancesComponent;
  let fixture: ComponentFixture<GameWithChancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWithChancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameWithChancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

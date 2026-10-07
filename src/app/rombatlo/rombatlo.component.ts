import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-rombatlo',
  styleUrl: './rombatlo.component.css',
  templateUrl: './rombatlo.component.html',
})
export class RombatloComponent {
  builder = inject(FormBuilder);

  rombatloForm = this.builder.group({
    ediagonal: ['', [Validators.required, Validators.min(1)]],
    fdiagonal: ['', [Validators.required, Validators.min(1)]],
    area: ['']
  })

  showArea = true;

  startCalcRombatlo() {
    const ediagonal = Number(this.rombatloForm.value.ediagonal);
    const fdiagonal = Number(this.rombatloForm.value.fdiagonal);
    const area = this.calcArea(ediagonal, fdiagonal);
    this.rombatloForm.get('area')?.setValue(String(area));
    this.showArea = true;
  }

  calcArea(ediagonal: number, fdiagonal: number): number {
    const area = 1/2 * ediagonal * fdiagonal;
    return area;
  }
}

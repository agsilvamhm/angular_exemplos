import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() phoneNumber: string = '';
  @Output() typeSelected = new EventEmitter<string>();

  onTypeChange(event: Event){
    const selectedType = (event.target as HTMLSelectElement).value;
    this.typeSelected.emit(selectedType);
  }
}

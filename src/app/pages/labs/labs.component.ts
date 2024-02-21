
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  title = 'Hola Mundo!';
  tasks = signal(['task1', 'task2', 'task3']);
  name = signal('Elio');
  age = 18;
  disabled = false;
  img = 'https://picsum.photos/200';

  person = signal({
    name: 'Elio',
    age: 18,
    avatar: 'https://picsum.photos/200',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('Elio', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  clickHandler() {
    alert('Hola Mundo!');
  }


  changeHandler(event: Event) {

    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeHandlerAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        age: +newValue,
      };
    } )
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    } )
  }
}


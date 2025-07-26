import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-add-game',
  imports: [ReactiveFormsModule, MatFormField, MatButtonModule,
    MatLabel, MatError, MatIconModule, FormsModule, CommonModule,
    MatInputModule, MatDatepickerModule, MatTimepickerModule
  ],
  templateUrl: './add-game.html',
  styleUrl: './add-game.scss',
  providers: [DatePipe, provideNativeDateAdapter()]
})
export class AddGame {
   myForm!: FormGroup;
   datePipe = inject(DatePipe);
   maxTime = new Date();
   maxDate = new Date();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
          skills: this.fb.array([]) // Initialize an empty FormArray
        });
        this.addSkill();
  }
  
  // Getter to easily access the 'skills' FormArray
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray; 
  }

  // In your component.ts file
addSkill(): void {
  this.skills.push(this.fb.group({
    date: [new Date().toISOString(), Validators.required],
    time: [new Date().toISOString(), Validators.required],
    name: ['', Validators.required],
    points: ['', Validators.required],
    rank: ['', [Validators.required, Validators.min(0)]]
  }));
}

removeSkill(index: number): void {
  this.skills.removeAt(index);
}

// In your component.ts file
onSubmit(): void {
  if (this.myForm.valid) {
    console.log(this.myForm.value);
    // Submit the data to your backend or perform other actions
  } else {
    // Handle invalid form submission
    console.log("Form is invalid!"); 
    this.myForm.markAllAsTouched(); // Show validation errors
  }
}
}

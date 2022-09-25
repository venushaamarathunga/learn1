import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName : new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.get('fullName').value);
  }
}

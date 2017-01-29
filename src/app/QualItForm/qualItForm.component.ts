import { Component } from '@angular/core';
import { qualUser }    from './qualUsers';

@Component({
  selector: 'Qual-Pilot-App',
  templateUrl: './qualItForm.component.html',
  styleUrls: ['./qualItForm.component.css']
  
})

export class qualItFormComponent {
	title = 'Qual IT - Interview Pilot Project';
	nameInputLabel = 'Name';
	experienceYearsInputLabel = 'Years of experience';
	specialityInputLabel = 'Speciality';
	submitButtonText = 'Submit Form';

	model = new qualUser('', null, '');
 
}


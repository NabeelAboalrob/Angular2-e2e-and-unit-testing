import {qualItFormComponent} from './qualItForm.component';
import { qualUser }    			from './qualUsers';

describe('Qual It Form', () => {
	let app = new qualItFormComponent();

	it('should be truthy', () => {
		expect(app).toBeTruthy();

	});

	it('should have the right title and labels', () => {
		expect(app.title).toBe('Qual IT - Interview Pilot Project');
		expect(app.nameInputLabel).toBe('Name');
		expect(app.experienceYearsInputLabel).toBe('Years of experience');
		expect(app.specialityInputLabel).toBe('Speciality');
		expect(app.submitButtonText).toBe('Submit Form');

	});

	it('should have the right model data filled on form load', () => {
		app.model = new qualUser('Nabeel', 15, 'QualityAssurance');

		expect(app.model.name).toBe('Nabeel');
		expect(app.model.experienceYears).toBe(15);
		expect(app.model.speciality).toBe('QualityAssurance');
		
	});

});
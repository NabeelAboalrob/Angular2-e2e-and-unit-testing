import { Component }    from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'Preview-Data-Table',
  templateUrl: './previewData.component.html',
  styleUrls: ['./previewData.component.css']
})

export class previewDataComponent {
  //Variables to store the data retrieved from the routes
  name = "";
  experienceYears = 0;
  speciality = "";

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
	            this.name = params["name"];
	            this.experienceYears = params["experienceYears"];
	            this.speciality =params["speciality"];
	            
    });
  };

 
}


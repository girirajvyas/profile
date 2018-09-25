import { Component, OnInit } from '@angular/core';
import { Organization } from '../models/organization';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

	constructor(private profileService: ProfileService) { }
	
  organizations: Organization[];

  ngOnInit() {
		this.profileService.getOrganizations().subscribe(
			res => this.organizations = res 
		);
  }

}

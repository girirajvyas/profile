import { Component, OnInit } from '@angular/core';
import { Organization } from '../models/organization';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.scss']
})
export class Timeline2Component implements OnInit {
  constructor(private profileService: ProfileService) { }
	
  organizations: Organization[];

  ngOnInit() {
		this.profileService.getOrganizations().subscribe(
			res => this.organizations = res 
		);
  }

}

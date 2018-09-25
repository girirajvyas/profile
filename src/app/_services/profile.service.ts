import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AppSettings } from '../shared/app.settings';
import { Organization } from '../models/organization';
import { ORGANIZATIONS } from '../_mock/organizations-mock';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private organizationUrl = AppSettings.ORGANIZATIONS_URL;
  
  constructor(private httpClient: HttpClient) { }

  getOrganizations(): Observable<Organization[]> {
    //return this.getOrganizationsLocal();
    return this.getOrganizationsFromFirebase();
  }

  getOrganizationsFromFirebase() : Observable<Organization[]>{
    return this.httpClient.get<Organization[]>(this.organizationUrl);
  }

  getOrganizationsLocal() : Observable<Organization[]> {
    return of(ORGANIZATIONS);
  }

}

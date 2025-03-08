export interface ServicesDetails {
  usagePurpose: string;
  personBestDescriptor: string;
  companyName: string;
  businessDirection: string;
  teamPeopleRange: string;
}

export type ServiceDetailsReturned = Promise<ServicesDetails>;
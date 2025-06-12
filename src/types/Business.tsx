export interface PersonalInformationData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  nationality: string;
  socialSecurityNumber: string;
  isBusinessOwner: string;
}

export interface BusinessInformationData {
  businessName: string;
  businessType: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZipCode: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  taxId: string;
  yearEstablished: string;
  numberOfEmployees: string;
  annualRevenue: string;
  businessDescription: string;
}

export interface BusinessOwnerData {
  firstName: string;
  lastName: string;
  title: string;
  ownershipPercentage: number;
  dateOfBirth: string;
  socialSecurityNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface FormationDocumentData {
  documentType: string;
  documentNumber: string;
  issuingState: string;
  dateIssued: string;
  documentFile?: File;
}

export interface EINVerificationData {
  ein: string;
  businessName: string;
  verificationMethod: string;
  documentFile?: File;
}

export interface BusinessAccountSetupData {
  personalInformation: PersonalInformationData;
  businessInformation: BusinessInformationData;
  businessOwners: BusinessOwnerData[];
  formationDocuments: FormationDocumentData[];
  einVerification: EINVerificationData;
  currentStep: string;
  completedSteps: string[];
}
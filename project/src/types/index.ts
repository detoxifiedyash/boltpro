export interface User {
  id: string;
  email: string;
  role: 'student' | 'staff' | 'faculty';
  firstName: string;
  lastName: string;
}

export interface Application {
  id: string;
  userId: string;
  status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'waitlisted' | 'rejected';
  submissionDate?: Date;
  personalInfo: PersonalInfo;
  academicInfo: AcademicInfo;
  documents: Document[];
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
}

export interface AcademicInfo {
  highSchool: string;
  gpa: number;
  satScore?: number;
  actScore?: number;
}

export interface Document {
  id: string;
  type: 'transcript' | 'essay' | 'recommendation' | 'other';
  name: string;
  url: string;
  uploadDate: Date;
}
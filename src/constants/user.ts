// This import to settings page
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Agent';
  lastLogin: string;
  status: 'Active' | 'Inactive';
}

export const users: User[] = [
  { id: 1, name: 'Jane Foster', email: 'jane.f@company.com', role: 'Admin', lastLogin: '05/01 08:15 AM', status: 'Active' },
  { id: 2, name: 'Peter Parker', email: 'peter.p@company.com', role: 'Agent', lastLogin: '05/02 09:30 AM', status: 'Active' },
  { id: 3, name: 'Tony Stark', email: 'tony.s@company.com', role: 'Admin', lastLogin: '04/28 02:45 PM', status: 'Active' },
  { id: 4, name: 'Bucky Barnes', email: 'bucky.b@company.com', role: 'Agent', lastLogin: '04/30 11:20 AM', status: 'Inactive' },
  { id: 5, name: 'Steve Rodgers', email: 'steve.r@company.com', role: 'Agent', lastLogin: '04/30 11:20 AM', status: 'Inactive' },
];

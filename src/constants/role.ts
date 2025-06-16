
export interface Role {
  id: number;
  name: string;
  description: string;
  usersAssigned: number;
}

// constants/roles.ts


export const roles: Role[] = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access and configuration rights',
    usersAssigned: 2,
  },
  {
    id: 2,
    name: 'Agent',
    description: 'Access to call management and basic features',
    usersAssigned: 8,
  },
  {
    id: 3,
    name: 'Quality Analyst',
    description: 'Access to call evaluation and reporting tools',
    usersAssigned: 3,
  },
];

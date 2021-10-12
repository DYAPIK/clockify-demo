export type User = {
  id: string;
  name: string;
  activeWorkspace: string;
  defaultWorkspace: string;
  email: string;
  profilePicture: string;
};

export type Status = 'PENDING' | 'ACTIVE' | 'DECLINED' | 'INACTIVE';

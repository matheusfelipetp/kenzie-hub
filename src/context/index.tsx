import { ReactNode } from 'react';
import { UserProvider } from './UserContext';
import { TechProvider } from './TechContext';

interface iProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

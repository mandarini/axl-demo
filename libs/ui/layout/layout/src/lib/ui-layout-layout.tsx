import { ReactNode } from 'react';
import { UiLayoutNavbar } from '@axl-demo/ui/layout/navbar';

export interface UiLayoutLayoutProps {
  children: ReactNode;
}

export function UiLayoutLayout(props: UiLayoutLayoutProps) {
  return (
    <div className="h-auto min-h-screen bg-base-200">
      <UiLayoutNavbar />
      <main className="container px-2 pt-10 mx-auto">{props.children}</main>
    </div>
  );
}

export default UiLayoutLayout;

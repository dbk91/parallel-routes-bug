import type { ReactNode } from "react";

type DashboardLayoutProps = {
  appBar: ReactNode;
  children: ReactNode;
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div>
      {props.appBar}
      {props.children}
    </div>
  );
}

import Pagina from "@/components/template/Pagina";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <Pagina>{props.children}</Pagina>;
}

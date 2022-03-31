import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import { NavSection } from "./NavSection";
import { Stack } from "@chakra-ui/react";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} children="Dashboard" />
        <NavLink icon={RiContactsLine} children="Usuário" />
      </NavSection>
      <NavSection title="AUTOMOÇÃO">
        <NavLink icon={RiInputMethodLine} children="Formulários" />
        <NavLink icon={RiGitMergeLine} children="Automação" />
      </NavSection>
    </Stack>
  );
}

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
        <NavLink href='/dashboard' icon={RiDashboardLine} children="Dashboard" />
        <NavLink href='/users' icon={RiContactsLine} children="Usuário" />
      </NavSection>
      <NavSection title="AUTOMOÇÃO">
        <NavLink href='/forms' icon={RiInputMethodLine} children="Formulários" />
        <NavLink href='/automation' icon={RiGitMergeLine} children="Automação" />
      </NavSection>
    </Stack>
  );
}

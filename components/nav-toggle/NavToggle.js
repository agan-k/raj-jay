import { NavToggleButton } from "./styled";

export default function NavToggle({handleToggleNav, $isNavOpen}) {
  return (
    <NavToggleButton onClick={handleToggleNav}>&#9776;</NavToggleButton>
  );
}
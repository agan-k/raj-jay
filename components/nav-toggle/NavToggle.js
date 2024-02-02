import { NavToggleButton } from "./styled";

export default function NavToggle({handleToggleNav}) {
  return (
    <NavToggleButton onClick={handleToggleNav}>&#9776;</NavToggleButton>
  );
}
import { NavToggleButton } from "./styled";

export default function NavToggle({handleToggleNav, $isNavOpen}) {
  return (
    <NavToggleButton 
      onClick={handleToggleNav}
      $isNavOpen={$isNavOpen}
    >
      &#9776;
    </NavToggleButton>
  );
}
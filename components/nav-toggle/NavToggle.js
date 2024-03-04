import { NavToggleButton } from "./styled";

export default function NavToggle({HandleToggleNav, $isNavOpen}) {
  return (
    <NavToggleButton 
      onClick={HandleToggleNav}
      $isNavOpen={$isNavOpen}
    >
      &#9776;
    </NavToggleButton>
  );
}
import { NavToggleButton } from "./styled";

export interface NavToggleProps {
  onClick: any
  $isNavOpen: boolean
}

export const NavToggle: React.FC<NavToggleProps> = ({
  onClick, 
  $isNavOpen
}) => {
  return (
    <NavToggleButton 
      onClick={onClick}
      $isNavOpen={$isNavOpen}
    >
      &#9776;
    </NavToggleButton>
  );
};
export default NavToggle;
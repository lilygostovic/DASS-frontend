import { Link } from 'react-router-dom';
import styled from 'styled-components';

// export const NavButton = ({ text, isSelected, onClick }: ButtonProps) => {
//   const textColor = isSelected ? "white" : "grey";

//   return (
//     <button
//         onClick={onClick}
//         style={{
//           color: `${textColor}`,
//           backgroundColor: "transparent",
//           border: "none",
//           borderRadius: "8px",
//           margin: "20px"
//         }}>
//             {text}
//     </button>
//   )
// }

export const NavButton = styled(Link)`
    color:white;
    margin: 10px;
    textDecoration: 'none'

    






`;

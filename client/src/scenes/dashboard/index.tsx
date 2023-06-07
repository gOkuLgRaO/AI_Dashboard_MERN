// we are using cc grids to position different boxes in the dashboard
import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
/*
a=revenue and expenses
b=profit and revenue
c=revenue month by month
d=op vs non-op expenses
e=campaigns and targets
f=product prices and expenses
g=list of products
h=recent orders
i=expense breakdown by category
j=overall summary

'a' and 'b' are a large boxes, so given it 4 units ie 'a' is put in 4 rows
'c' is a bit small, so given it 3 units ie used in 3 rows.
in 4th row, we started 'f' becz 'c' got ended, and gave it 3 units, ie used in 3 rows
from 5th row, start 'd' and give it 3 units. start 'e' and give it '2' units
in 7th row, start 'h' and give it 4 units becz its big. start 'i' and give it 2 units
in 8th row start 'g' and give it 3 units.
in 9th row, start 'j' and give it 2 units
*/
const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");  // when the screen is shortened, minimum width of the grid should be 1200px, if not, we call gridTemplateSmallScreens where grid cells are expressed in one column
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens  // when screen size is greater than 1200px
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",  // total 3 columns
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",  // total 10 rows
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {   // if not greater than 1200px
              gridAutoColumns: "1fr",  // 1 fractional unit
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;

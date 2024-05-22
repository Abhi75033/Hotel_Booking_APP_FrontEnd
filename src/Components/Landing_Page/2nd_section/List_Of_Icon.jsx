import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  AcUnitOutlined,
  AirportShuttleOutlined,
  BedOutlined,
  BungalowOutlined,
  CastleOutlined,
  CottageOutlined,
  DeckOutlined,
  DomainVerification,
  DownhillSkiing,
  FilterHdrOutlined,
  FoundationOutlined,
  HotTubOutlined,
  LocationCityOutlined,
  Pool,
  SailingOutlined,
  SurfingOutlined,
  Token,
  Window,
} from "@mui/icons-material";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { BsViewList } from "react-icons/bs";
import { BiWindow } from "react-icons/bi";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import { Link, NavLink } from "react-router-dom";

export default function Iocnbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Link className="text-dark">
          <Tab label={<LocalActivityOutlinedIcon />} value={value} />
        </Link>
        <Link  className="text-dark">
          <Tab label={<Pool />} value={value} />
        </Link>
        <Link  className="text-dark">
          <Tab label={<Window />} />
        </Link>
        <Link  className="text-dark">
        <Tab label={<BalconyOutlinedIcon />} />
        </Link>
       
       <Link  className="text-dark">
       <Tab label={<LocationCityOutlined />} />
       </Link>
 
       <Link  className="text-dark"> 
       <Tab label={<CastleOutlined />} />
       </Link>
       <Link  className="text-dark">
       <Tab label={<FoundationOutlined />} />
       </Link>

       <Link  className="text-dark">
       <Tab label={<DeckOutlined />} />
       </Link>
   <Link  className="text-dark">
   <Tab label={<CottageOutlined />} />
   </Link>
      <Link  className="text-dark">
      <Tab label={<SurfingOutlined />} />
      </Link>
        <Link  className="text-dark">
        <Tab label={<FilterHdrOutlined />} />
        </Link >
       <Link  className="text-dark">
       <Tab label={<DownhillSkiing />} />
       </Link>
       <Link  className="text-dark">
       <Tab label={<AcUnitOutlined />} />
       </Link>
        <Link  className="text-dark">
        <Tab label={<AirportShuttleOutlined />} />
        </Link>
       <Link  className="text-dark">
       <Tab label={<SailingOutlined />} />
       </Link>
        <Link  className="text-dark">
        <Tab label={<HotTubOutlined />} />
        </Link>
      <Link  className="text-dark">
      <Tab label={<DomainVerification />} />
      </Link>
        <Link  className="text-dark">
        <Tab label={<BedOutlined />} />
        </Link>
       
      </Tabs>
    </Box>
  );
}




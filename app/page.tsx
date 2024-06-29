import { Button, Typography } from "@mui/material";
import Banner from "./components/home/banner/Banner";
import Product from "./components/home/product/Product";
import PersonIcon from "@mui/icons-material/Person";
export default function Home() {
  return (
    <main className="container">
      home
      <Banner />
      <Product />
      <div className="bg-primary-main">cal;skdf;ádf</div>
      <div className="font-sans">cal;skdf;ádf</div>
      <Button startIcon={<PersonIcon />}>Sign up</Button>
      <Typography>Popppins</Typography>
    </main>
  );
}

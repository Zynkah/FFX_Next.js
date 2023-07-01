import Layout from "../components/layout";
import { Typography } from "@mui/material";

function pageNotFound() {
  return (
    <Layout>
      <Typography variant="h2" component='h1'>404</Typography>
      <Typography variant="h5" component='h2'>Page Not Found</Typography>
    </Layout>
  );
}
export default pageNotFound;

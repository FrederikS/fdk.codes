/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import { Avatar, Flex, Box } from "@theme-ui/components";
// @ts-ignore
import AboutText from "../text/about";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ flexDirection: ["column", "column", "row", "row"] }}>
        <Box p={2} sx={{ width: ["full", "full", "2/3", "2/3"] }}>
          <AboutText />
        </Box>
        <Box
          p={2}
          sx={{
            display: "flex",
            width: ["full", "full", "1/3", "1/3"]
          }}
        >
          <Avatar
            src="/avatar.jpg"
            sx={{ width: ["1/2", "1/2", "full", "full"], m: "auto" }}
          />
        </Box>
      </Flex>
    </Layout>
  );
};

export default AboutPage;
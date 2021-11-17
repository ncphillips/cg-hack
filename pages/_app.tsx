import Link from "next/link";
import { ContentBlock } from "@careguide/theme";
import Stack, { StackItem } from "@careguide/stack";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalFont } from "@careguide/theme";
import { Heading } from "@careguide/typography";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <ContentBlock width="100%">
        <Stack gap="2">
          <ContentBlock width="100%" maxWidth="900px" p="4">
            <Header />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContentBlock>
        </Stack>
      </ContentBlock>
    </ThemeProvider>
  );
}

export default MyApp;

const Header = () => (
  <ContentBlock
    width="100%"
    maxWidth="900px"
    borderBottom="1px solid"
    borderColor="gray.1"
    p="4"
  >
    <Link href="/" passHref>
      <a>
        <Heading as="h1">HeartPayroll</Heading>
      </a>
    </Link>
  </ContentBlock>
);

const Layout = ({ children }) => {
  return (
    <Stack direction="horizontal" gap="3">
      <StackItem span="2">
        <Sidebar />
      </StackItem>
      <StackItem span="10">
        <ContentBlock p="4">{children}</ContentBlock>
      </StackItem>
    </Stack>
  );
};

const menuItems = [
  { href: "/jobs", label: "Jobs" },
  { href: "/employees", label: "Employees" },
  { href: "/banking", label: "Banking Info" },
];

const Sidebar = () => {
  return (
    <ContentBlock>
      <Stack>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <ContentBlock as="a" p="4">
              <Stack>{item.label}</Stack>
            </ContentBlock>
          </Link>
        ))}
      </Stack>
    </ContentBlock>
  );
};

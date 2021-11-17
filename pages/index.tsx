import { Heading } from "@careguide/typography";
import { ContentBlock } from "@careguide/theme";
import React from "react";

export default function Home() {
  return (
    <ContentBlock maxWidth="1200px" padding="6">
      <Heading as="h1">NOlans NOVember NOVels</Heading>
    </ContentBlock>
  );
}

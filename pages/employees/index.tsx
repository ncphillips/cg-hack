import Button from "@careguide/button";
import { Table, Cell } from "@careguide/table";
import { Heading } from "@careguide/typography";
import React from "react";
import Stack from "@careguide/stack";

export default function Employees() {
  return (
    <Stack gap="5">
      <Heading as="h1">Employees</Heading>

      <Button size="small">Add Employee</Button>
      <Table layout="fixed">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {[
            { firstName: "Joan", lastName: "d'Arc" },
            { firstName: "Jordan", lastName: "Bedwell" },
          ].map(({ firstName, lastName }) => {
            return (
              <tr key={firstName}>
                <Cell>{firstName}</Cell>
                <Cell>{lastName}</Cell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Stack>
  );
}

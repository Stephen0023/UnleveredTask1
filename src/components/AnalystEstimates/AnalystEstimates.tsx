import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useFinancialData } from "../../hooks/useFinancialData";
import { useTheme } from "../../context/theme-context";
import Loading from "../Loading/Loading";
import "./AnalystEstimates.css";

export default function AnalystEstimates() {
  const { ref } = useSectionInView("Estimates");
  const { data, loading, error } = useFinancialData();
  const { theme } = useTheme();

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <section ref={ref} id="estimates" className="estimates-container">
      <div className="estimates-title"> Analyst Estimates</div>
      <Paper>
        <TableContainer>
          <Table
            aria-label="analyst estimates table"
            sx={{
              ...(theme === "dark" && {
                backgroundColor: "#1a202c",
                color: "white",
              }),
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      backgroundColor: "#1a202c",
                      color: "white",
                    }),
                  }}
                >
                  Company
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      backgroundColor: "#1a202c",
                      color: "white",
                    }),
                  }}
                >
                  Estimate
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(data.analyst_estimates).map(
                ([analyst, estimate]) => (
                  <TableRow key={analyst}>
                    <TableCell
                      sx={{
                        ...(theme === "dark" && {
                          backgroundColor: "#1a202c",
                          color: "white",
                        }),
                      }}
                    >
                      {analyst}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...(theme === "dark" && {
                          backgroundColor: "#1a202c",
                          color: "white",
                        }),
                      }}
                    >
                      {estimate}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </section>
  );
}

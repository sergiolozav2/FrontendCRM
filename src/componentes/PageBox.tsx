import { Box, Container } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PageBox = ({ children }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "",
        minHeight: "0px",
        padding: "0px",
      }}
    >
      <Container sx={{ p: 0 }}>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};

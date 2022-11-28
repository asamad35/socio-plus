import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import goku from "../assets/goku-avatar.png";

const Message = () => {
  function createMessage() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            margin: "1.5rem",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={goku} />
          <Typography
            sx={{
              fontSize: "1rem",
              backgroundColor: "#dcdddc",
              maxWidth: "50%",
              padding: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            jdnasjdsa djqwdjk qwjdjq djqwdnjqd djqwdqd dqwd d qdidnqwd idnwqidnd
            widqndn iqwdnwqind{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            margin: "1.5rem",
            justifyContent: "end",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={goku} />
          <Typography
            sx={{
              fontSize: "1rem",
              backgroundColor: "#dcdddc",
              maxWidth: "50%",
              padding: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            jdnasjdsa djqwdjk qwjdjq djqwdnjqd djqwdqd dqwd d qdidnqwd idnwqidnd
            widqndn iqwdnwqind{" "}
          </Typography>
        </Box>

        <Box sx={{ margin: "0  auto" }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#161616",
              backgroundColor: "#9a9b9a",
              width: "fit-content",
              padding: "0.2rem 0.5rem",
              borderRadius: "1rem",
            }}
          >
            {" "}
            19 November 2022
          </Typography>
        </Box>
      </>
    );
  }

  return createMessage();
};

export default Message;

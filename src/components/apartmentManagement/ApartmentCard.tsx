import { Box, Card, Divider, Grid, IconButton, styled } from "@mui/material";
import { H3, H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React, { FC } from "react";
import {User, UserCardProps} from "../userManagement/UserCard";

// component props interface
export interface ApartmentCardProps {
  apartment: Apartment;
}

export interface Apartment {
  id: number
  roomNumber: string
  floor: string
  user: User
}



// styled components
const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 100,
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100],
  },
}));

const StyledAvatar = styled(UkoAvatar)(({ theme }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  border: "2px solid",
  borderColor: theme.palette.background.paper,
}));

const ApartmentCard: FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src="/static/cover/cover-1.png" width="100%" height="100%" alt="{apartment.name}" />

        <StyledAvatar src="/static/avatar/001-man.svg" alt="{apartment.name}" />
      </ImageWrapper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 5,
        }}
      >
        <H6>"apartment"</H6>
        <Tiny color="text.disabled" fontWeight={500}>
          Marketing Manager
        </Tiny>

        <Box marginTop={2}>
          <IconButton>
            <img src="/static/social-media/facebook.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/twitter.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/instagram.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/dribble.svg" alt="" />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3} mb={2}>
        <Grid item xs={4} textAlign="center">
          <H3>{apartment.floor}</H3>
          <Small color="text.disabled">Post Avg.</Small>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <H3>{apartment.roomNumber}</H3>
          <Small color="text.disabled">Followers</Small>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <H3>{apartment.user.firstName}</H3>
          <Small color="text.disabled">Following</Small>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ApartmentCard;

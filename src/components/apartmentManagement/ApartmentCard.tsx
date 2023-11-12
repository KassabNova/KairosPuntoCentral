import {Box, Card, Divider, Grid, IconButton, styled} from "@mui/material";
import {H1, H3, H4, H6, Small, Tiny} from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React, {FC} from "react";
import {User} from "../userManagement/UserCard";

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
const ImageWrapper = styled(Box)(({theme}) => ({
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



const ApartmentCard: FC<ApartmentCardProps> = ({apartment}) => {
  const coverPath = Math.floor(Math.random() * 6) + 1
  return (
      <Card>
        <ImageWrapper>
          <img src={"/static/cover/cover-" + coverPath + ".png"} width="100%" height="100%"
               alt="{apartment.name}"/>
        </ImageWrapper>

        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 5,
            }}
        >
          <H4 color="text.disabled" fontWeight={500}>
            Apartamento #:
          </H4>
          <H1>{apartment.roomNumber}</H1>


        </Box>

        {/*<Divider sx={{ my: 2 }} />*/}

        {/*<Grid container spacing={3} mb={2}>*/}
        {/*  <Grid item xs={4} textAlign="center">*/}
        {/*    <H3>{apartment.floor}</H3>*/}
        {/*    <Small color="text.disabled">Post Avg.</Small>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={4} textAlign="center">*/}
        {/*    <H3>{apartment.roomNumber}</H3>*/}
        {/*    <Small color="text.disabled">Followers</Small>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={4} textAlign="center">*/}
        {/*    <H3>{apartment.user.firstName}</H3>*/}
        {/*    <Small color="text.disabled">Following</Small>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Card>
  );
};

export default ApartmentCard;

import {Box, Card, styled} from "@mui/material";
import {H1, H4, } from "components/Typography";
import React, {FC} from "react";
import {ImageWrapper} from "../reservationManagement/ReservationCard";

// component props interface
export interface GuestCardProps {
    guest: Guest;
}

export interface Guest {
    id: string
    firstName: string
    lastName: string
    reservation: string
}

const GuestCard: FC<GuestCardProps> = ({guest}) => {
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
                }}>
                <H4 color="text.disabled" fontWeight={500}>Departamento #: </H4>
                <H1>{guest.firstName}</H1>
            </Box>
        </Card>
    );
};

export default GuestCard;

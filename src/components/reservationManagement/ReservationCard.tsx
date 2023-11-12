import {Box, Card, styled} from "@mui/material";
import {H1, H4} from "components/Typography";
import React, {FC} from "react";
import {Guest} from "../guestManagement/GuestCard";
import {Apartment} from "../apartmentManagement/ApartmentCard";

// component props interface
export interface ReservationCardProps {
    reservation: Reservation;
}

export interface Reservation {
    id: string
    apartment: Apartment
    startDate: Date
    endDate: Date
    aproxArrivalDate: Date
    checkIn: Date
    checkOut: Date
    guests: Guest[]
}


// styled components
export const ImageWrapper = styled(Box)(({theme}) => ({
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


const ReservationCard: FC<ReservationCardProps> = ({reservation}) => {
    const coverPath = Math.floor(Math.random() * 6) + 1
    return (
        <Card>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: 5,
                }}
            >
                <H4 color="text.disabled" fontWeight={500}>
                    Fecha de Reservacion:
                </H4>
                <H1>{new Date(reservation.aproxArrivalDate).toLocaleDateString("es-mx")}</H1>
            </Box>
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
                    Huespedes en Reservacion:
                </H4>
                <H1>{reservation.guests.length}</H1>
            </Box>
        </Card>
    );
};

export default ReservationCard;

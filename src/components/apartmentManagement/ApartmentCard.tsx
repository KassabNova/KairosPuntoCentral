import {Box, Card, Divider, Grid, IconButton, styled} from "@mui/material";
import {H1, H3, H4, H6, Small, Tiny} from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React, {FC} from "react";
import {User} from "../userManagement/UserCard";
import {useNavigate} from "react-router-dom";

// component props interface
export interface ApartmentCardProps {
    apartment: Apartment;
}

export interface Apartment {
    id: number
    roomNumber: string
    floor: string
    user: User[]
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
    const coverPath = Math.floor(Math.random() * 6) + 1;
    const navigate = useNavigate();
    const handleGetApartment = () => navigate("/apartments/" + apartment.id+ "/reservations");

    return (
        <Card onClick={handleGetApartment}>
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
        </Card>
    );
};

export default ApartmentCard;

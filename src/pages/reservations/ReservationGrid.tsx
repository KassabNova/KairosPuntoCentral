import { Box, Grid } from "@mui/material";
import useTitle from "hooks/useTitle";
import {FC, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ReservationCard, {Reservation} from "../../components/reservationManagement/ReservationCard";

export interface ReservationGridProps {
  apartmentId: string;
}

const ReservationGrid: FC<ReservationGridProps> = ({apartmentId}) => {
  // change navbar title
  useTitle("Reservaciones");

  const navigate = useNavigate();
  const handleAddApar = () => navigate("/dashboard/add-user");
  const [reservations, setReservations] =
      useState<Reservation[]>([]);

  const url = "http://localhost:8080/reservations/apartment/"+apartmentId;

  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then((result) => { setReservations(result as Reservation[]); })
        .catch(error => console.error(error));
  }, []);

  return (
    <Box pt={2} pb={4}>

      <Grid container spacing={3}>
        {reservations?.map((reservationData, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ReservationCard reservation={reservationData}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};



export default ReservationGrid;

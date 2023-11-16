import {Box, Button, Grid, styled} from "@mui/material";
import useTitle from "hooks/useTitle";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ReservationCard, {Reservation} from "../../components/reservationManagement/ReservationCard";
import SearchInput from "../../components/SearchInput";
import FlexBox from "../../components/FlexBox";
import {QrReader} from "react-qr-reader";

export interface ReservationGridProps {
  apartmentId: string;
}

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));
const Test = (props: any) => {
  const [data, setData] = useState<string>('No result');

    return (
      <>
        <QrReader
            onResult={(result: any, error: any) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            constraints={ {facingMode: 'rear'} }
        />
          <p>{data}</p>
      </>
  );
};

const ReservationGrid: FC = () => {
  // change navbar title
  useTitle("Reservaciones");
  const { apartmentId } = useParams();


  const navigate = useNavigate();
  const handleAddReservation = () => navigate("/apartments/" + apartmentId + "/add-reservation");

  const [reservations, setReservations] =
      useState<Reservation[]>([]);

  const url = "http://192.168.0.100:8080/reservations/apartment/"+apartmentId;

  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then((result) => { setReservations(result as Reservation[]); })
        .catch(error => console.error(error));
  }, []);

  return (
    <Box pt={2} pb={4}>
        <Test/>

      <StyledFlexBox>
        <Button variant="contained" onClick={handleAddReservation}>
          Agendar Reserva
        </Button>
      </StyledFlexBox>
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

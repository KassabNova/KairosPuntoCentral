import { Box, Button, Grid, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import SearchInput from "components/SearchInput";
import UserCard from "components/userManagement/UserCard";
import useTitle from "hooks/useTitle";
import {FC, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ApartmentCard, {Apartment, ApartmentCardProps} from "../../components/apartmentManagement/ApartmentCard";

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

const UserGrid: FC = () => {
  // change navbar title
  useTitle("User Grid");

  const navigate = useNavigate();
  const handleAddUser = () => navigate("/dashboard/add-user");
  const [apartments, setApartments] =
      useState<Apartment[]>([]);


  useEffect(() => {
    fetch('http://localhost:8080/apartments/')
        .then(response => response.json())
        .then((result) => { setApartments(result as Apartment[]); console.log(apartments)})
        .catch(error => console.error(error));
    console.log(apartments)
  }, []);

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Search user..." />
        <Button variant="contained" onClick={handleAddUser}>
          Add New User
        </Button>
      </StyledFlexBox>

      <Grid container spacing={3}>
        {apartments?.map((appt, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ApartmentCard apartment={appt}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};



export default UserGrid;

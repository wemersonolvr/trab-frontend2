import { Container } from "@mui/system";
import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar'
import CharacterCard from '../components/Card';
import { Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {
    const[games, setGames] = useState([])
    useEffect(() =>{
        getGames()
    }, [])

    const getGames = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setGames(res));
  };
    
    return(
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container>
                    {games.map((game, key) => 
                    <Grid item xs = {3} key = {key}>
                        <CharacterCard name = {game.data.name} image={game.data.sprites.front_default}/> 
                    </Grid>)}
                </Grid>
                 
            </Container >
        </div>


    )
}
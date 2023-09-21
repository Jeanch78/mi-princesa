import { Container, Grid, Paper } from '@mui/material'
import React from 'react'

export default function Flower() {
    return (

        <Container maxWidth="xl">
            <Grid container spacing={2}
                style={{ minHeight: '101vh', justifyContent: 'center', alignContent: 'center' }}>
                <Grid item md={5} sm={12} xs={12} className='p_flower'>
                    <div className="flower">
                        <div className="text-above">De tu principe <br />JEAN C. </div>
                        <div className="mid">
                        </div>
                        <div className="Petal1 p1">
                        </div>
                        <div className="Petal1 p2">
                        </div>
                        <div className="Petal1 p3">
                        </div>
                        <div className="Petal1 p4">
                        </div>
                        <div className="Petal2 p1">
                        </div>
                        <div className="Petal2 p2">
                        </div>
                        <div className="Petal2 p3">
                        </div>
                        <div className="Petal2 p4">
                        </div>
                        <div className="Petal3 p1">
                        </div>
                        <div className="Petal3 p2">
                        </div>
                        <div className="Petal3 p3">
                        </div>
                        <div className="Petal3 p4">
                        </div>
                        <div className="text-below" style={{ paddingTop: '1em' }}>Para ty HEYDI Hermosa. </div>
                    </div>
                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={{ pb: 2, justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                    <Paper elevation={3} sx={{ p: 2, border: 'none',  borderRadius: "0.4rem", maxHeight: '100vh' }}>
                        Querida Heydi,<br /><br />
                        Hoy, mientras la naturaleza despierta con sus colores más vibrantes y los pájaros entonan sus melodías más dulces, quiero darte la más cálida bienvenida a la estación de la renovación y el florecimiento, la primavera. Al igual que las flores que se abren paso a través de la tierra en busca del sol, tu luz y alegría iluminan cada día de mi vida.
                        <br /><br />
                        En esta temporada llena de esperanza y amor, quiero recordarte cuánto significas para mí. Eres como una flor en mi jardín secreto, siempre radiante y llena de vida. Cada día contigo es un nuevo comienzo, una oportunidad para crecer juntos y construir recuerdos que perdurarán para siempre.
                        <br /><br />
                        Que este primer día de la primavera marque el inicio de una época llena de amor, alegría y aventuras compartidas. Estoy emocionado por todo lo que el futuro nos depara y por cada momento que compartiremos bajo el sol primaveral.
                        <br /><br />
                        Te amo más de lo que las palabras pueden expresar, Heydi. ¡Bienvenida a esta maravillosa estación, y bienvenida a mi corazón eterno!
                        <br /><br />
                        Con todo mi amor,
                        Jean Carlos.
                    </Paper>
                </Grid>
            </Grid>


        </Container>
    )
}

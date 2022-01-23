import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, Divider, Typography, useTheme } from '@mui/material';
import { LogSeverityStats } from '../../external_data_mock/types';
import { Theme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

type Props = {
    stats: { [key: string]: LogSeverityStats },
    total: number
}

export const LogStatistcs: React.FC<Props> = (props: { stats: { [key: string]: LogSeverityStats }, total: number }) => {
    const theme: Theme = useTheme();

    const logSeverity: string[] = Object.keys(props.stats)
    const logSeverityQuantity: number[] = logSeverity.map((value) => {
        return props.stats[value].quantity
    })

    const data = {
        datasets: [
            {
                data: logSeverityQuantity,
                backgroundColor: ['#3F51B5', '#FB8C00', '#e53935'],
                borderWidth: 8,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF'
            }
        ],
        labels: logSeverity
    };

    const options: any = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={1}
        >
            <Grid item style={{ border: "0.2px solid gray" }}>
                <Card {...props}>
                    <Typography gutterBottom variant="h5" component="div">
                        {`Total messages: ${props.total} `}
                    </Typography>
                    <Divider />
                    <CardContent>
                        <Box
                            sx={{
                                height: 150,
                            }}
                        >
                            <Doughnut
                                data={data}
                                options={options}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 1
                            }}
                        >
                            {Object.keys(props.stats).map((
                                name,
                                index
                            ) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 1,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Typography
                                        color="textPrimary"
                                        variant="body1"
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                    >
                                        {((props.stats[name].quantity / props.total) * 100).toFixed()}
                                        %
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

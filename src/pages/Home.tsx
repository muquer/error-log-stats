import { TrafficByDevice } from '../components/Stats/TrafficByDevice';
import { logsApiResult } from '../services/types';
import { useLazyGetLogsListQuery } from '../services/logsEndpoint';
import { Chart, registerables } from 'chart.js';
import { LogListResults } from '../components/LogList/LogListResults';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
Chart.register(...registerables);


function Home() {
    const [page, setPage] = useState(0)
    const [isBottom, setIsBottom] = useState(false);
    const [data, setData] = useState<logsApiResult>({ list: [], stats: {} })
    const [trigger, result, lastPromiseInfo] = useLazyGetLogsListQuery()

    useEffect(() => {
        //only execute retrieval when is not already fetching data to avoid fauty logic on value calculations
        if (!result.isFetching) {
            retrieveData()
        }

    }, [isBottom])

    //Retrieve data from the API
    function retrieveData() {
        setIsBottom(false);
        //trigger fetch using redux query
        trigger(page).then((result) => {
            if (result.data) {
                let stats = { ...data.stats }

                //contactenate the retrieved data to the already fetched data
                let list = data.list.concat(result.data.list.slice())

                //Update the quantity values in order to update statistical data
                Object.keys(result.data.stats).forEach((value: string) => {
                    if (stats[value] === undefined) {
                        stats[value] = {
                            quantity: result.data?.stats[value].quantity || 0,
                            percentage: 0
                        }
                    } else {
                        stats[value].quantity += (result.data?.stats[value].quantity || 0)
                    }
                })
                //re-render component state
                setData({ list: list, stats: stats })
                setPage(page + 1)
            }
        })
    }


    function handleScroll() {
        if (!isBottom) {
            const scrollTop = (document.documentElement
                && document.documentElement.scrollTop)
                || document.body.scrollTop;
            const scrollHeight = (document.documentElement
                && document.documentElement.scrollHeight)
                || document.body.scrollHeight;
            if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
                setIsBottom(true);
            }
        }


    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <header className="App-header">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            {<LogListResults list={data.list} />}
                        </Grid>
                        <Grid item xs={4}>
                            {result.data?.stats ? <div style={{ position: 'fixed', right: 0 }}><TrafficByDevice stats={data.stats} total={data.list.length} /></div> : <></>}
                        </Grid>
                    </Grid>
                </Box>
            </header>
        </div>
    );
}

export default Home;
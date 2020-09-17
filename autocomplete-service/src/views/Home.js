import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DataList from '../components/DataList';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = () => {
    const [searchKeyword, setSearchKeyword] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [receivedData, setReceivedData] = useState(undefined);

    const search = (keyword) => {
        setSearchKeyword(keyword);
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!searchKeyword) return;

            const baseUri = 'http://localhost:9000/search';
            const url = `${baseUri}/repositories/${searchKeyword}`;

            setLoading(true);

            await axios.get(url).then(res => {
                setReceivedData(res.data);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            })  
        };
     
        fetchData();
      }, [searchKeyword]);

    return(
        <div>
            <SearchBar onSearch={search}/>
            { loading && <LinearProgress color='secondary'></LinearProgress> }
            { receivedData !== undefined && <DataList data={receivedData} /> }
        </div>
    )
}

export default Home;
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DataList from '../components/DataList';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = () => {
    const [searchKey, setSearchKey] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [receivedData, setReceivedData] = useState(undefined);

    const searchKeyChange = (searchKey) => {
        console.log(searchKey);
        setSearchKey({
            keyword: searchKey.keyword,
            type: searchKey.type
        });
    }

    useEffect(() => {
        const fetchData = async () => {
    
            if (!searchKey) return;
            console.log('start fetching data: ' + searchKey.keyword)

            const baseUri = 'http://localhost:9000/search';
            const url = `${baseUri}/${searchKey.type}/${searchKey.keyword}`;
            console.log('start fetching data: ' + url)

            setLoading(true);

            await axios.get(url).then(res => {
                setReceivedData({
                    type: searchKey.type, 
                    data: res.data});
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            })  
        };
     
        fetchData();
      }, [searchKey]);

    return(
        <div>
            <SearchBar 
                onSearchKeyChange={searchKeyChange}
            />
            { loading && <LinearProgress color='secondary'></LinearProgress> }
            { receivedData !== undefined && 
                <DataList 
                    data={receivedData} 
                /> 
            }
        </div>
    )
}

export default Home;
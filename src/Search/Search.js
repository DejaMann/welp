import React from 'react';
import { AddlResults } from '../components/AddlResults/AddlResults';
import { SearchResults } from '../components/SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../components/yelp-api/useBusinessSearch';
import InnerNav from '../components/InnerNav/InnerNav'


export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
            <InnerNav term={term} location={locationParam} search={search}/>
            <AddlResults term={searchParams.term}
                                  location={searchParams.location}
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}
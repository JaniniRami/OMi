import React, {useState} from 'react';

import styled from 'styled-components';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const OD = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

function Search(props) {   

        const [st, setSt] = useState(0);


                const handleOnSearch = (string, cached) => {
                    // onSearch returns the string searched and if
                    // the values are cached. If the values are cached
                    // "cached" contains the cached values, if not, returns false
                    console.log(string, cached)
                    console.log(props.items);
                  }
                
                  const handleOnSelect = (item) => {
                    // the item selected
                    console.log(item)

                    props.found(item.name);

                    
                    
                  }
                
                  const handleOnFocus = () => {
                    console.log('Focused');
                  }
                

        return (
         <OD>
            <ReactSearchAutocomplete
            items={props.items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            showIcon={false}
            maxResults={5}
            placeholder="Search..."
            
            styling={{borderRadius: "5px", fontSize: "22px", fontWeight: "bold", lineHeight: "1.2"}}

            autoFocus
          />
        </OD>
        )

    }

    


export default Search;
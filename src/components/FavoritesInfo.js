import React from 'react';


const FavoritesInfo = (props) => {
    return(
        <div>
            <table className="table table-dark" id="favoritesTable">
                <tbody id="favoritesTableBody">
                    <tr id="favoritesTableRows">
                        <th id="favoritesTableHeader">
                            <a href={props.animeUrl} 
                                    target="_blank" 
                                    className="text-decoration-none" 
                                    alt={props.titles.english === null ?
                                    props.titles.romaji:
                                    props.titles.english                       
                                        }>
                                <img 
                                    className="relative rounded"
                                    id="favoritesCard"
                                    src={props.image}
                                />
                            </a>
                        </th>
                        <td>
                            <a id="favoritesLink" href={props.animeUrl} 
                                        target="_blank" 
                                        className="text-decoration-none"> 
                                <p className="text-center" id="favoriteTitles">
                                        {props.titles.english === null ?
                                        props.titles.romaji:
                                        props.titles.english                       
                                    }
                                </p>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            

        </div>
        
    );
};

export default FavoritesInfo;
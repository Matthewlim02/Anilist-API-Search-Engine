import React from 'react';


const TrendingInfo = (props) => {
    return(
        <div>
            <div>
                <div class="p-4" id="animeCard">
                    <a href={props.animeUrl} 
                            target="_blank" 
                            class="text-decoration-none text-white" 
                            alt={props.titles.english === null ?
                            props.titles.romaji:
                            props.titles.english                       
                                }>
                        <img 
                            class="relative rounded"
                            id="trendingCard"
                            src={props.image}
                        />
                        <p class="fs-6 mt-1 text-center" id="animeTitles">
                            {props.titles.english === null ?
                            props.titles.romaji:
                            props.titles.english                       
                        }
                        </p>
                
                    </a>
                </div>
            </div>
            

        </div>
        
    );
};

export default TrendingInfo;
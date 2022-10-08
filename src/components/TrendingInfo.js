import React from 'react';


const TrendingInfo = (props) => {
    return(
        <div>
            <div>
                <div class="p-5" id="animeCard">
                    <a href={props.animeUrl} 
                            target="_blank" 
                            class="text-decoration-none text-white" 
                            alt={props.titles.english === null ?
                            props.titles.romaji:
                            props.titles.english                       
                                }>
                        <img 
                            class="relative shadow-lg rounded-sm h-full w-full border border-secondary"
                            src={props.image}
                        />
                        <p class="fs-6">
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
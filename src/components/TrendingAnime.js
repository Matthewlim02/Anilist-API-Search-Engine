import React, { Component } from 'react';
import axios from 'axios';
import { RiFireFill } from 'react-icons/ri';
import TrendingInfo from './TrendingInfo';


class TrendingAnime extends Component {
        state = {
            error: null,
            items: []
        }

        getAnime = async (query, variables) => {
            try {
                const response = await axios.post('https://graphql.anilist.co', {
                    query,
                    variables
                });

                console.log(response.data)

                this.setState(() => ({
                    items: response.data.data.Page.media
                }));

            } catch (error) {
                console.log('An error has occured.')
            }
        }

         componentDidMount() {
            const query = `
                query ($page: Int, $perPage: Int) {
                    Page (page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                        media (isAdult: false, type: ANIME, sort: TRENDING_DESC) {
                        id
                        title {
                            romaji
                            english
                        }
                        siteUrl
                        coverImage {
                            extraLarge
                            large
                            medium
                        }
                    }
            }
        }`;

        const variables = {
            page: 1,
            perPage: 9,
         };

         this.getAnime(query, variables)

        };


        render () {

            const { items } = this.state;

                return (
                    <div>
                        <div className="fs-3" id="trendingTitle">  
                            <p id="trendingColor"> Trending </p>
                            <i id="fireIcon"><RiFireFill /></i>
                        </div>
                        <div className="d-flex flex-wrap justify-items-evenly justify-between align-middle" id="posterDesigns">
                            {items.map(item => (
                                <TrendingInfo 
                                key={item.id} 
                                image={item.coverImage.large}
                                titles={item.title}
                                animeUrl={item.siteUrl}
                                
                                />
                            ))}
                        </div>
                    </div>
                );       
            
        };

    };


export default TrendingAnime;












































import React, { Component } from 'react';
import axios from 'axios';
import PopularInfo from './FavoritesInfo';


class PopularAnime extends Component {
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
                        media (isAdult: false, type: ANIME, sort: POPULARITY_DESC) {
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
            perPage: 5,
         };

         this.getAnime(query, variables)

        };


        render () {

            const { items } = this.state;

                return (
                    <div id="popularMain">
                        <table className="table">
                            <thead className="fs-3" id="favoritedTitle">
                                <p id="favoritedColor"> Most Popular </p>
                            </thead>
                        </table>
                        <div className="flex-wrap" id="popularPosterDesigns">
                            {items.map(item => (
                                <PopularInfo 
                                key={item.id} 
                                image={item.coverImage.medium}
                                titles={item.title}
                                animeUrl={item.siteUrl}
                                
                                />
                            ))}
                        </div>
                    </div>
                );       
            
        };

    };


export default PopularAnime;
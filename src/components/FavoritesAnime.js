import React, { Component } from 'react';
import axios from 'axios';
import FavoritesInfo from './FavoritesInfo';


class FavoritesAnime extends Component {
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
                        media (isAdult: false, type: ANIME, sort: FAVOURITES_DESC) {
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
                    <div id="favoritesMain">
                        <table className="table">
                            <thead className="fs-3" id="favoritedTitle">
                                <p id="favoritedColor"> Most Favorited </p>
                            </thead>
                        </table>
                        <div className="flex-wrap justify-items-evenly justify-between align-middle" id="favoritesPosterDesigns">
                            {items.map(item => (
                                <FavoritesInfo 
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


export default FavoritesAnime;

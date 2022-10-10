import React, { Component } from 'react';
import axios from 'axios';



class Search extends Component {
       
        //not working yet


         componentDidMount() {
            const query = `
                query ($id: Int, $page: Int, $perPage: Int $search: String) {
                    Page (page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                        media (id: $id, search: $search, isAdult: false sort: POPULARITY_DESC) {
                        id
                        idMal
                        title {
                            romaji
                            english
                        }
                        type
                        endDate {
                            year
                            month
                            day
                        }
                        studios(isMain: true) {
                            nodes {
                                name
                            }
                        }
                        isAdult
                        source
                        genres
                        volumes
                        episodes
                        chapters
                        siteUrl
                        status
                        averageScore
                        meanScore
                        popularity
                        description
                        favourites
                        coverImage {
                          extraLarge
                          medium
                          large
                          color
                    }
                }
            }
        }`;

        const variables = {
            search: this.query,
            page: 1,
            perPage: 50,
         };
        };


        render () {

                return (
                    <div>
                        <nav class="navbar bg-dark">
                            <div class="container-fluid">
                                <a class="navbar-brand text-white">Navbar</a>
                                <form class="d-flex" role="search">
                                <input 
                                class="form-control me-2" 
                                type="search"
                                name="query" 
                                placeholder="Search" 
                                aria-label="Search" 
                               
                                
                                
                                
                                />
                                <button 
                                class="btn btn-outline-secondary bg-dark text-white" 
                                type="submit"
                               
                                >
                                    Search
                                </button>
                                </form>
                            </div>
                        </nav>
                    </div>
                );       
            
        };

    };


export default Search;
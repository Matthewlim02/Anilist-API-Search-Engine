import React, { Component } from 'react';
import axios from 'axios';



class Search extends Component {
        state = {
            error: null,
            anime: [],
            loading: false,
            animeCount: 0,
            allResults: 0
        };

        searchAnime = async (query, variables) => {
            try {
                const results = await axios.post('https://graphql.anilist.co', {
                    query,
                    variables
                });

                setTimeout(() => {
                    this.$Progress.finish();
                    this.loading = false;
                  }, 300);
                  if (this.$Progress.finish()) {
                    this.loading = false;
                  }
                  this.totalResults = results.data.data.Page.media.length;
                  if (this.totalResults === 0) {
                    this.$Progress.finish();
                    this.loading = false;
                  }

                this.setState(() => ({
                    items: results.data.data.Page.media
                }));

            } catch (error) {
                console.log('An error has occured.')
            }

            this.anime.forEach((e) => {
                if (e.type === "ANIME") {
                  console.log(e.title.romaji, e.studios.nodes[0].name);
                  this.animeCount++;
                }
              });
        }

         componentDidMount() {
            this.loading = true;
            this.$Progress.start();
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
            perPage: 80,
         };

         this.searchAnime(query, variables)

        };


        render () {

            const { items } = this.state;

                return (
                    <div>
                        <nav class="navbar bg-dark">
                            <div class="container-fluid">
                                <a class="navbar-brand text-white">Navbar</a>
                                <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-secondary bg-dark text-white" type="submit">Search</button>
                                </form>
                            </div>
                            <div>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                    </li>
                                    {/* <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                );       
            
        };

    };


export default Search;
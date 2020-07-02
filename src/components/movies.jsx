import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService.js"
import {getGenres} from "../services/fakeGenreService.js"
import ListGroup from "./reusable/listGroup.jsx"
import Pagination from "./reusable/pagination.jsx"
import {paginate} from '../utils/paginate'
import MoviesTable from "./moviesTable.jsx"
import _ from 'lodash';


class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount() {
        const genres = [{_id: "", name: 'All Genres'}, ...getGenres()]
        this.setState({movies: getMovies(), genres})
    }


    getPagedData = () => {

        const {pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return {
            totalCount: filtered.length,
            data: movies
        };
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({movies});
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].like = !movies[index].like;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
        this.blurButton();
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = sortColumn => {


        this.setState({sortColumn, currentPage: 1});
    }

    blurButton = () => {
        setTimeout(() => document.activeElement.blur(), 200);
    }

    renderMovies() {
        if (this.state.movies.length === 0) return <p>There are no Movies!</p>;
        return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
    }
    render() {

        const {length: count} = this.state.movies;
        const {pageSize, currentPage, sortColumn} = this.state;

        if (count === 0) return 'No movies available';

        const {totalCount, data: movies} = this.getPagedData();

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <p>
                            Showing {totalCount} movies in the database
                        </p>
                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                            onDelete={this.handleDelete}
                        />
                        <Pagination
                            itemsCount={totalCount}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Movies;

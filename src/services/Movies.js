import { MAIN_API } from "../lib/apiConstants";

export class MoviesService {
    /**
     * @description
     * Get all movies. This method makes a request to the swapi endpoint.
     * This endpoint is used for getting movies data
     */
    static async getMovies() {
        try {
            const res = await fetch(`${MAIN_API}/films/`, {
                method: 'GET',
            });
            const {results} = await res.json();
            return results;
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * @description
     * Get movie by id.
     */
    static async getMovie(movieId) {
        try {
            const res = await fetch(`https://api.allorigins.win/get?url=${MAIN_API}/films/${movieId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const {contents} = await res.json();
            try {
                return JSON.parse(contents)
            }
            catch (err) {
                return {}
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * @description
     * Get movie by id.
     */
    static async getCharacterByUrl(url) {
        try {
            const res = await fetch(`https://api.allorigins.win/get?url=${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const {contents} = await res.json();
            try {
                return JSON.parse(contents)
            }
            catch (err) {
                return {}
            }

        } catch (error) {
            throw new Error(error);
        }
    }

}


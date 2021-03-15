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
    static async getMovie(selectedMovieUrl) {
        try {
            const res = await fetch(addHttpsToLink(selectedMovieUrl), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await res.json();

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
            const res = await fetch(addHttpsToLink(url), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await res.json();

        } catch (error) {
            throw new Error(error);
        }
    }

}

const addHttpsToLink = (link) => {
    if (!link) return '';
    // if link already starts with "https://", do nothing
    if (/^https:\/\/.*$/.test(link)) { return link; }
    // if unsecured "http://" already exists, take it out altogether
    link = link.replace(/http:\/\//,'');
    // prepend link with "https://"
    link = `https://${link}`;
    return link;
};

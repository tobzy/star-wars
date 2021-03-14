import { useQuery } from 'react-query';
import { MoviesService} from "../services/Movies";
import { cacheKey } from './cacheStateKey';

export function useGetMovies() {
    const result = useQuery({
        queryKey: [cacheKey.movies],
        queryFn: () => MoviesService.getMovies(),
    });
    return result;
}

export function useGetMovie(movieId) {
    const result = useQuery({
        queryKey: [cacheKey.movie, movieId],
        queryFn: () => {
            return MoviesService.getMovie(movieId)
        }
    });
    return result;
}

export function useGetMovieCharacter(url) {
    const result = useQuery({
        queryKey: [cacheKey.character, url],
        queryFn: () => {
            return MoviesService.getCharacterByUrl(url)
        }
    });
    return result;
}

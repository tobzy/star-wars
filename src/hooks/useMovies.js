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

export function useGetMovie(selectedMovieUrl) {
    const result = useQuery({
        queryKey: [cacheKey.movie, selectedMovieUrl],
        queryFn: () => {
            return MoviesService.getMovie(selectedMovieUrl)
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

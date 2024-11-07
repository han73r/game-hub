import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponce {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchGamesResponce>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
                setError(err.message)});
        return () => controller.abort();
    },[]);

    return {games, error };
}
// make a lot of requests while component re-rendering
// use AbortController to fix that
// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
  
//     useEffect(() => {
//         const controller = new AbortController();
//       apiClient
//         .get<FetchGamesResponce>("/games", {signal: controller.signal})
//         .then((res) => setGames(res.data.results))
//         .catch((err) => {setError(err.message)});

//     },[]);

//     return {games, error };
// }

export default useGames;
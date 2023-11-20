import ApoliceStats from "./ApoliceStats";
import ClienteStats from "./ClienteStats";
import SinistrosStats from "./SinistrosStats";

interface AllStats {
    CLIENT_STATS: ClienteStats,
    APOLICE_STATS: ApoliceStats,
    SINISTROS_STATS: SinistrosStats,
}

export default AllStats;
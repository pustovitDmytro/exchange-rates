/**
 * Created by pusti on 26.08.2017.
 */
const search = (type="RATES") => (query='') => ({
    type: `SEARCH_${type}`,
    payload: {query},
});

export const searchRates = search("RATES");
export const searchHistory = search("HISTORY");
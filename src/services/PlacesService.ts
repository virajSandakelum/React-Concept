import api from "./indexType2";

type PlaceType = {
    place_id: number
}

export const getPlacesApi = async (userID: number) => {
    const response = await api.get(`/places/${userID}`);
    return response;
};

export const getPlaceDataApi = async (placeID: number) => {
    const response = await api.get(`/places/place/${placeID}`);
    return response;
};

export const addPlaceApi = async (place: PlaceType) => {
    const response = await api.post("/places/add", place);
    return response;
};

export const updatePlaceApi = async (place: PlaceType) => {
    const response = await api.patch(`/places/update/${place.place_id}`, place);
    return response;
};
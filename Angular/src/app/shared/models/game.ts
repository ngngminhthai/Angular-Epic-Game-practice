import genres from "./genres";

export default interface game{
        "id": number,
        "title": string,
        "genres": genres[],
        "publisher": string,
        "description": string,
        "developer": string,
        "coverImage": string,
        "price": number
}

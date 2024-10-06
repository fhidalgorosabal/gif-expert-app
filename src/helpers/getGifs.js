export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z7Ek6Un4RpPQQjV9bJBuP1LFXgXns0bc&q=${ category }&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
};
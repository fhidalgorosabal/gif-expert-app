export const getCategory = () => {
    const categories = ['funny', 'cats', 'dogs', 'sports', 'memes', 'nature', 'movies', 'gaming', 'music', 'travel'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};
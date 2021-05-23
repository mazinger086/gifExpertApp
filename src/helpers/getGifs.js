

  export const getGifs = async( category ) => {
    try {
        const apiKey=`Q6c2YHs29rLQYBLCo6A8rdpNGPtcO04L`
        const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;

        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map( img  => {
            return {
                id: img.id,
                url: img.images?.downsized.url,
                title: img.title                    
            }
            
        })

       return gifs;
        

    } catch (error) {
        return error;
    }
}
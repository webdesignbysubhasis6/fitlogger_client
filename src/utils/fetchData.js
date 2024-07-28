
export const exerciseOptions = {
    method: 'GET',
    params: {
        limit: '0',
        offset: '0'
      },
    headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      },
  };
  

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}

export const exerciseOptions = {
    method: 'GET',
    params: {
        limit: '0',
        offset: '0'
      },
    headers: {
        'x-rapidapi-key': '4f129afba9msh76852f2e95d6c0ap1b8ae6jsn0c026c92541c',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      },
  };
  // process.env.RAPID_API_KEY

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}
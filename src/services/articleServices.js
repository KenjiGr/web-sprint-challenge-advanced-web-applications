import axiosWithAuth from "../utils/axiosWithAuth";


const articleService = ()=> {
    return axiosWithAuth().get('/articles').then(res => {
        console.log(res.data);
        return res.data
    }).catch(err => {
        console.error(err)
    })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
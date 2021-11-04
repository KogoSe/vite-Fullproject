import React from 'react'
import { getPosts } from '../../Utility/Post_Logic/Posts'

const PostIndex = () => {
    const [data,setData]= useState([])
    const getPs =async()=>{
        await getPosts().then((res)=>{
            setData(res);
        })
    }
   useEffect(()=>{
       getPs
   },[]);
    return (
        <div>
            <ul>
 {data.length !== 0 ? (<>
            {data.map((res,i)=>{
                return (
                <div> key ={i}
                    <li>{res.name}</li>
                    <li>{res.username}</li>
                    <li>{res.email}</li>
                </div>
                );
            })}

           </> ):(<></>)}
            </ul>
        </div>
    )
}

export default PostIndex

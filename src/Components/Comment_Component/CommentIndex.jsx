import React from 'react'
import { getComments } from '../../Utility/Comment_Logic/Comments'

const CommentIndex = () => {
    const [data,setData]= useState([])
    const getCom =async()=>{
        await getComments.then((res)=>{
            setData(res);
        })
    }
   useEffect(()=>{
       getCom
   },[])
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

export default CommentIndex

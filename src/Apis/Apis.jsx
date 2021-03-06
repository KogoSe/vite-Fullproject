import axios from "axios";
import { Component } from "react";

class Apis extends Component{
    static GetPosts=async()=>{
        try{

            const result = await axios({
                URL:"/posts",
                method:"GET"
            }).catch((err)=>{
                console.log(err.message);
            })

            return result.data
                
        } catch (error) {
            console.log(error.message)
        }
    }
    static GetComments=async()=>{
        try{

            const result = await axios({
                URL:"/comments",
                method:"GET"
            }).catch((err)=>{
                console.log(err.message);
            })

            return result.data
                
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
    static GetUsers=async()=>{
        try{

            const result = await axios({
                URL:"/users",
                method:"GET"
            }).catch((err)=>{
                console.log(err.message);
            })

            return result.data
                
        } catch (error) {
            console.log(error.message)
        }
    }


}











export default Apis
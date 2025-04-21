import { useNavigate } from "react-router-dom";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import './Community.css'


const Community = ({post , setPost, clickView}) => {
    const nav = useNavigate();

    const[search, setSearch] = useState("");
    const[filter, setFilter] = useState(post);

    const searchKeyword = () => {
        const result = post.filter((p) =>
            p.title.includes(search) ||
            p.content.includes(search)
        );
        setFilter(result);
    } 

    useEffect(() => {
        if (search === "") {
            setFilter(post);
        }
    },[search,post])
    
    
    return(

        <div className="community"> 
            
        <SearchBar 
            search={search}
            setSearch = {setSearch}
            searchKeyword={searchKeyword}
        />

            <div className="communitymain" >
                <button onClick={() => {nav('/mypost')}} >내글보기</button>             
                <button  onClick={() => {nav('/write')}} >작성하기</button>      
            </div>

        <List postlist={filter} clickView={clickView} />
                
        </div>
    );
};

export default Community;
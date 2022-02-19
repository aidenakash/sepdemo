import React from "react";
import axios from "axios"
class NewsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[],
            search:""
        }
    }
    callNewsAPI(newsip){
        axios.get("https://hn.algolia.com/api/v1/search?query="+newsip).
        then((res)=>this.setState({news:res.data.hits})).catch((err)=>console.log(err))
    }
   
    setSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
        return(
            <div>
                <h1> Techie News</h1>
                <form>
                    <input type="text" placeholder="enter the search text"
                    onChange={this.setSearch}></input>
                    
                </form>
                <button onClick={()=>this.callNewsAPI(this.state.search)}>search</button>
                
                {
                    this.state.news.map(
                        (item)=>(
                            <div>
                                <h2>{item.author}</h2>
                                <p>{item.title}</p>
                                <a href={item.url}> Click here</a>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}
export default NewsApp
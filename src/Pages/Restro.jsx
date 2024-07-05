import { useParams } from "react-router-dom";

const Restro = ()=>{
    const {id} = useParams();
    return <div className="h-[100vh] w-[100vw] flex justify-center items-center">Mall id is  : {id}</div>
}

export default Restro;
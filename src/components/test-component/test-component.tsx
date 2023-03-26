import { CircularProgress, Skeleton } from "@mui/material";
// import axios from "axios";
import useFetch, { useAxiosGet } from "../../custom-hooks/useFetch";
import IKanyeRestQuote from "../../models/kanye-rest-quote";

const TestComponent = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    const [krq] = useAxiosGet("https://api.kanye.rest");

    


    // https://api.kanye.rest
    // https://randomuser.me/api/
    // https://official-joke-api.appspot.com/random_joke
    // https://ipinfo.io/161.185.160.93/geo
    // https://api.ipify.org/?format=json
    // https://dog.ceo/api/breeds/image/random
    // https://datausa.io/api/data?drilldowns=Nation&measures=Population

    // axios.get("https://www.boredapi.com/api/activity")
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    // axios.get("https://api.publicapis.org/entries")
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    

    // axios.get("https://catfact.ninja/fact?max_length=70")
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    // axios.get("https://catfact.ninja/facts?max_length=100&limit=50")
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    if (!krq) {
        return null;
    }

    const newKrq: IKanyeRestQuote = krq;

    return (
        <>
            {krq ? (
                    <div>{newKrq.quote ? newKrq.quote : "Loading"}</div>
                ) : (
                    <Skeleton variant="rectangular" width={210} height={30} />
                )
            }
            <CircularProgress />
            {data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};

export default TestComponent;



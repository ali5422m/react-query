import {useLocation, useParams, useSearchParams} from "react-router-dom";

const UserDetail = () => {
    const params = useParams();
    console.log(params);
    // har chi bad az users/ biayad ra midahad. manzoor hamoon id hast
    // give me a object with {id : '2'}

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    console.log(searchParams.get("name"));
    // get query string . after ? come give me such az ?name:ali&age:20

    const location = useLocation();
    console.log(location);
    // give me a object with pathname && search

    return (
        <div>
            User {params.id}
        </div>
    );
};

export default UserDetail;
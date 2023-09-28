import {NavLink, useNavigate} from "react-router-dom";

const Navigation = () => {
        const navigate = useNavigate()
    return (
        <div style={{position: 'fixed', top: 0, left:0, right: 0}}>
            <br/>
                <button onClick={() => navigate(-1)}>Back</button>
                <NavLink to={'/users'} style={{marginRight: '20px'}}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            <br/>
        </div>
    );
};

export default Navigation;
import { Header, Posts, Sidebar } from '../../components/molecouls';
import './home.css';

const Home = () => {
    return (
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}

export default Home

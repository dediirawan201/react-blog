import { SinglePost } from '../../components/atom';
import { Sidebar } from '../../components/molecouls';
import './single.css';

const Single = () => {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single

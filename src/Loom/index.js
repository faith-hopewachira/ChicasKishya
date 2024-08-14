import './index.css'
import loom1 from '../Images/loom1.jpg'
import loom2 from '../Images/loom2.jpg'
import loom3 from '../Images/loom3.jpg'
import loom4 from '../Images/loom4.jpg'


const LoomVideos = ()=>{
    return(
        <div className='team'>
         <h1><b>Let's Learn More About Jira</b></h1>
        <div id='Team_pictures'>
            <div className='jemimahYvonne'>
        <div id='jemimah'>
            <fig>
            <img id='leila' src={loom1} alt='' />
            <figcaption><b>Part 1</b></figcaption>
            <figcaption>History and Development of Jira</figcaption>
            <figcaption><a href='https://www.loom.com/share/0f96d050c1ab437ea196757e46d90e0a?sid=aade91a4-cdaf-4d7b-9d74-0f89d1f59d10'>Watch</a></figcaption>
            </fig>
        </div>
         <div id='yvonne'>
            <fig>
            <img src={loom2}alt=''/>
            <figcaption><b>Part 2</b></figcaption>
            <figcaption>Use cases Of Jira</figcaption>
            <figcaption><a href='https://www.loom.com/share/855149235faa437e8bd4e8609c99e982?sid=1a25636b-fe6c-49ec-92e9-7214ae6bfeea'>Watch</a></figcaption>
            </fig>
            </div>
            </div>
            <div id='fanny'>
            <fig>
            <img src={loom3} alt=''/>
            <figcaption><b>Part 3</b></figcaption>
            <figcaption>Features Of Jira</figcaption>
            <figcaption><a href='https://www.loom.com/share/4388088abe9c49408861a1752fcc4964?sid=3abf3650-bd50-4fe4-aeeb-a1e93dba2e22'>Watch</a></figcaption>
            </fig>
            </div>
            <div className='rehema'>
            <div id='rehema'>
            <fig>
            <img src={loom4} alt=''/>
            <figcaption><b>Part 4</b></figcaption>
            <figcaption>Revenue Models and Pros&Cons of Jira</figcaption>
            <figcaption><a href='https://www.loom.com/share/9c182b50b84e416189536cdcac720405?sid=47a38bdd-f3a5-4bb9-b5fa-465214901581'>Watch</a></figcaption>
            </fig>
            </div>
            <div id='yiamat'>
            <fig>
            <img src={loom1} alt=''/>
            <figcaption><b>Part 5</b></figcaption>
            <figcaption>Architecture Structure</figcaption>
            <figcaption><a href='https://www.loom.com/share/19ce6c588238414a84758111e2ecdc17?sid=36c16f28-5532-4e24-8dce-27d8ab30de7c'>Watch</a></figcaption>
            </fig>
            </div>
            </div>
        </div>
        </div>
    );
}
export default LoomVideos;
import './App.css';
import Blog from './Components/Blog/Blog';
import Mobile from './Components/Mobile/Mobile';
import Table from './Components/Table/Table';

//apply css with object 
const headingStyle = {
  fontWeight:'bold',
  textAlign:'center',
  color:'green'
}

function App() {
  return (
    <div className="App">
      <article className='blog'>
        <h2 style={headingStyle}>This is my first blog</h2>
        <p style={{fontWeight:'bold',color:'salmon'}}>
        Hello, I am learning react js for web development. I am the future web developer for your copmany and the freelance market. thaks
        </p>
      </article>
      <div className='article'>
      <Blog heading="My heading" author="dev forhad"></Blog>
      <Blog heading="My heading 2" author="dev forhad 2"></Blog>
      <Blog heading="My heading 3" author="dev forhad 3"></Blog>
      </div>
      <Mobile></Mobile>
      <div>
        <Table></Table>
      </div>
    </div>
  );
}

export default App;

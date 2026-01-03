import Section1 from './components/Section1/Section1'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'orange',
      intro: 'Prime customers , that have access to bank credit and are satisfied with the current product',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661777823895-3c39691d3087?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'lightseagreen',
      intro: 'Prime customers , that have access to bank credit and are not satisfied with the current service',
      tag: 'UnderServed'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661638411416-44996b30ce2c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'black',
      intro: 'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag: 'UnderBanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1722349512829-af804401baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'royalblue',
      intro: 'Customers from near-prime and sub-prime segments with access to bank credit',
      tag: 'UnderAccess'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661687044814-625be53611d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'brown',
      intro: 'Customers from near prime and subprime segments with access to bank credit with more average',
      tag: 'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}
export default App

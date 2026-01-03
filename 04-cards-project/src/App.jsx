import Card from './component/Card';

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 65,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Remote, India"
    },
    {
      brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Pune, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.dribbble.com/userupload/30846413/file/still-2ebad96f3bcdf511e1a66a295ebd0ea9.png?format=webp&resize=400x300&vertical=center",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "Mobile App Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: 58,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
      companyName: "Airbnb",
      datePosted: "10 weeks ago",
      post: "Product Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Remote, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_oracle.jpg",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Noida, India"
    }
  ];

  return (
    <div className='parent'>

      {/* <Card /> */}

      {jobOpenings.map(function (elem , idx) {
        return <div key={idx}>
          <Card company={elem.companyName} location={elem.location} brandLogo = {elem.brandLogo} datePosted = {elem.datePosted} pay={elem.pay} post = {elem.post} />
        </div>
      })}
      

    </div>
  )
}

export default App

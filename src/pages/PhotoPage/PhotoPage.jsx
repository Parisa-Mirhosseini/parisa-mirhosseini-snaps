
export default function PhotoPage() {
  return <div>Photo Page</div>
  
  }


















// // pages/PhotoPage.jsx
// import { useParams } from "react-router-dom";
// import Header from "../../components/Header/Header.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
// import CommentList from "../../components/CommentList/CommentList.jsx";
// import CommentForm from "../../components/CommentForm/CommentForm.jsx";

// function PhotoPage() {
//     const { id } = useParams(); // Get the photo ID from the URL
//     const [photo, setPhoto] = useState(null);
  
//     // Fetch individual photo details from the API
//     useEffect(() => {
//       axios
//         .get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}`, {
//           headers: { Authorization: `Bearer ${API_KEY}` }, // Replace API_KEY with your actual API key
//         })
//         .then((response) => setPhoto(response.data))
//         .catch((error) => console.error(error));
//     }, [id]);
  
//     // Show a loading message while the photo data is being fetched
//     if (!photo) return <div>Loading...</div>;
  
//     return (
//       <div className="photo-page">
//         <Header />
//         <img src={photo.imageUrl} alt={photo.title} className="photo-image" />
//         <h2>{photo.title}</h2>
//         <p>{photo.description}</p>
//         <CommentList comments={photo.comments} />
//         <CommentForm photoId={photo.id} />
//         <Footer />
//       </div>
//     );
//   }
  
//   export default PhotoPage;
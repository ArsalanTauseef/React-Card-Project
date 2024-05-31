import "./App.css";
import UserCard from "./components/code";
import imgs1 from "./images-avatar/avatar-face1.avif";
import imgs2 from "./images-avatar/avatar-face2.avif";
import imgs3 from "./images-avatar/avatar-face3.avif";

function App() {
  const users = [
    {
      id: 1,
      firstName: "Liam",
      lastName: "Johnson",
      region: "United States",
      description: "Full Stack Developer specializing in MERN stack.",
      image: imgs1
    },
    {
      id: 2,
      firstName: "Noah",
      lastName: "Brown",
      region: "United Kingdom",
      description: "Cybersecurity Analyst focusing on threat detection.",
      image: imgs2
    },
    {
      id: 3,
      firstName: "Oliver",
      lastName: "Garcia",
      region: "Spain",
      description: "Data Scientist with a passion for machine learning.",
      image: imgs3
    },
    {
      id: 4,
      firstName: "Elijah",
      lastName: "Lee",
      region: "South Korea",
      description: "Software Engineer experienced in blockchain technology.",
      image: imgs1
    },
    {
      id: 5,
      firstName: "James",
      lastName: "Singh",
      region: "India",
      description: "Cloud Architect specializing in Azure and Google Cloud.",
      image: imgs2
    },
    {
      id: 6,
      firstName: "Mason",
      lastName: "Martinez",
      region: "Mexico",
      description: "UI/UX Designer with a focus on user-centered design.",
      image: imgs3
    },
    {
      id: 7,
      firstName: "William",
      lastName: "Kim",
      region: "Japan",
      description:
        "AI Researcher with a background in natural language processing.",
        image: imgs1
    },
    {
      id: 8,
      firstName: "Ethan",
      lastName: "Chen",
      region: "China",
      description: "Backend Developer skilled in Java and Spring Boot.",
      image: imgs2
    },
    {
      id: 9,
      firstName: "Benjamin",
      lastName: "Smith",
      region: "Australia",
      description: "Mobile App Developer proficient in Flutter and Swift.",
      image: imgs3
    },
    {
      id: 10,
      firstName: "Lucas",
      lastName: "Jones",
      region: "Canada",
      description: "DevOps Engineer with expertise in AWS and Docker.",
      image: imgs1
    },
  ];
  return (
    <>
      <div className="main-content">
        <h1>HEADING</h1>
        <hr />
        <br />
        <div>
          {users.map((user, index) => {
            return <UserCard u={user} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;

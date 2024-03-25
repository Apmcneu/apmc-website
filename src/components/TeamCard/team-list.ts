import img1 from '../../assets/Teammates/test.jpg';
import img2 from '../../assets/Teammates/test.jpg';
import img3 from '../../assets/Teammates/test.jpg';

interface TeamMember {
    name: string;
    image: string;
    designation: string;
    connect: string;
  }
  

  const teamlist: TeamMember[] = [
    {
      name: "Name1",
      image: img1,
      designation: "Designation1",
      connect: "https://www.google.com/",
    },
    {
      name: "Name2",
      image: img2,
      designation: "Designation2",
      connect: "https://www.google.com/",
    },
    {
      name: "Name3",
      image: img3,
      designation: "Designation3",
      connect: "https://www.google.com/",
    },
  ];
  
  export default teamlist;
  
import './styles.css'

interface TeamCardProps {
    name: string;
    image: string;
    designation: string;
    connect: string;
  }

function TeamCard({name, image, designation, connect} : TeamCardProps) {
  return (
    // <div className="container">
    //     <div className="card__container">

            <article className="card__article">
                <img src={image} alt="Teammate" className="card__image"/>
                <div className="card__data">
                    <span className="card__description">
                        {designation}
                    </span>
                    <h2 className="card__title">
                        {name}
                    </h2>
                    <a href={connect} className="card__button">Connect</a>
                </div>
            </article>

    //     </div>
    // </div>
  );
}

export default TeamCard

// import TeamCard from './components/TeamCard/TeamCard'
// import teamlist from './components/TeamCard/team-list'
// import './components/TeamCard/styles.css'

{/* <div className="container">
    <div className="card__container">
    {teamlist.map((item, index) => (
      <TeamCard key = {index} name = {item.name} image = {item.image} designation = {item.designation} connect = {item.connect}/>
    ))}
    </div>
    </div> */}

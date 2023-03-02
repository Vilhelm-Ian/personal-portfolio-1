import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

let json = require("./projects.json");

function Project() {
  let projects = json.map((value, index) => (
    <section id="service" className="" key={index}>
      <div className="card mt-4 flex flex-col md:flex-row gap-8">
        <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
          {value.image != "#" ? (
            <a href={value.link}>
              {" "}
              <img src={value.image} className="w-48" />{" "}
            </a>
          ) : (
            ""
          )}
          <h2 className="text-xl">{value.title}</h2>
          <p className="text-gray-500">{value.description}</p>
          <a href={value.repo}>
            <AiFillGithub />
          </a>
          {value.link != "#" ? (
            <a href={value.link}>
              <AiOutlineLink />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  ));
  return <div className="projects">{projects}</div>;
}

export default Project;

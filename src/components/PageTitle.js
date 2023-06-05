import "./PageTitle.css";
const PageTitle = ({ navBarVisible }) => {
  console.log(navBarVisible);

  return <h1 className="text-4xl w-3/5 sm:w-auto">Game analytics</h1>;
};

export default PageTitle;

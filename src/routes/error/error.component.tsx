import { Link } from "react-router-dom";

/*
  This is the Error (or the 404) page. This component will be the page that is shown
  when an error occurs or a page was not found. In App.jsx the route for this
  component is defined as '*'.
*/

interface ErrorProps {
  title: string;
  message: string;
  url: string;
}

const Error = ({ title, message, url }: ErrorProps) => {
  return (
    <section>
      <article>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to={url}>Go back</Link>
      </article>
    </section>
  );
};

export default Error;

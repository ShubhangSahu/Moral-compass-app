import { Link } from "react-router-dom";

function UserPage() {
  return (
    <section className="grid grid-cols-1 max-w-[1024px] mx-auto  md:grid-cols-[1fr_auto_1fr] gap-10 h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-12 text-xl font-bold text-center">
          Play the Quiz for enhancing your ethical skills
        </h1>
        <Link to="/user/quiz" className="w-20 btn btn-primary">
          Quiz
        </Link>
      </div>
      <div className="divider divider-horizontal">Or</div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-12 text-xl font-bold text-center">
          Read Blogs by different experts
        </h1>
        <Link to="/user/blogs" className="w-20 btn btn-secondary">
          Blogs
        </Link>
      </div>
    </section>
  );
}
export default UserPage;

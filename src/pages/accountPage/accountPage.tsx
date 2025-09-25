import { Link } from "react-router"

export default function AccountPage() {
  return (
    <div className="h-screen px-6">
      <div className="mb-4">
        <Link to={`/`} className=" py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
      </div>
      <h1>Welcome User!</h1>
    </div>
  )
}

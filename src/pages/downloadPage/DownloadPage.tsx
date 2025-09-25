import { Link } from "react-router"

export default function DownloadPage() {
  return (
    <div className="h-screen p-6">
      <div className="mb-4">
        <Link to={`/`} className=" py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
      </div>
      <h1>My Downloads</h1>
      <p>No downloads listed.</p>
    </div>
  )
}

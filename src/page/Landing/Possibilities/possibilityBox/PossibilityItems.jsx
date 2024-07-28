import ShowText from "../../RepeatingComponents/ShowText";

export default function PossibilityItems({url , head , caption}) {
  return (
    <div className="flex flex-col items-center justify-center">
        <img src={url} alt="" srcset="" />
        <ShowText head={head} par={caption} clsPar={"text-md text-gray-400"} clsHead={"text-md"} mt={true} />
    </div>
  )
}


export default function Landings() {
    const data=[
        {name: "لندینگ 1" , url : "../../src/images/index-1.png"},
        {name: "لندینگ 2" , url : "../../src/images/index-2.png"},
        {name: "لندینگ 3" , url : "../../src/images/index-3.png"},
        {name: "لندینگ 4" , url : "../../src/images/index-4.png"},
        {name: "لندینگ 5" , url : "../../src/images/index-5.png"},
        {name: "لندینگ 6" , url : "../../src/images/index-6.png"},
    ]
  return (
    <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10">
            {data.map((img , index) => (
                <div className="flex flex-col justify-center items-center gap-5 shadow-lg p-4 hover:cursor-pointer  hover:-translate-y-4 transition-all duration-300 rounded-md" key={index}>
                    <img src={img.url} alt="" className="" />
                    <p>{img.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
